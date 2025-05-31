import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import mongoose from "mongoose";

// Инициализация Express
const app = express();
const PORT = 4444;

// Настройки CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

const sleep = (ms = 5000) =>
  new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, ms)
  );

const checkInternet = async () => {
  try {
    await fetch("https://www.google.com", { method: "HEAD", timeout: 5000 });
    return true;
  } catch {
    return false;
  }
};

const run = () => {
  // Telegram Bot
  const TELEGRAM_BOT_TOKEN = "7648027896:AAHlcDo4nPkfu_SzEna7xHoP6SKZ352uEbA";
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

  bot.on("polling_error", async (error) => {
    console.error("❌ Polling Error:", error.message);
    await reconnect();
  });

  bot.on("error", async (error) => {
    console.error("‼️ Bot Error:", error.message);
    await reconnect();
  });

  // Подключение к MongoDB
  mongoose
    .connect("mongodb://localhost:27017/wedding_bot")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

  // Схемы Mongoose
  const SubscriberSchema = new mongoose.Schema({
    chat_id: { type: Number, required: true, unique: true },
    first_name: String,
    last_name: String,
    created_at: { type: Date, default: Date.now },
  });

  const FormSubmissionSchema = new mongoose.Schema({
    type: { type: String, enum: ["solo", "family", "reject"], required: true },
    name: { type: String, required: true },
    dietary_preferences: String,
    allergies: String,
    alcohol_preferences: [String],
    created_at: { type: Date, default: Date.now },
  });

  const Subscriber = mongoose.model("Subscriber", SubscriberSchema);
  const FormSubmission = mongoose.model("FormSubmission", FormSubmissionSchema);

  // Middleware
  app.use(bodyParser.json());

  // Роуты
  app.post("/api/reject", async (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Numele este obligatoriu" });
    }

    try {
      // Сохраняем в MongoDB
      await new FormSubmission({
        type: "reject",
        name,
      }).save();

      // Отправка уведомлений
      await sendTelegramNotifications(
        `⚠️ <b>${name}</b> ne-a informat că nu va putea veni la nuntă.`
      );

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/family", async (req, res) => {
    const { name, allergies, alimentare, alcohol } = req.body;

    if (!name || !allergies || !alimentare || !alcohol) {
      return res
        .status(400)
        .json({ error: "Toate câmpurile obligatorii lipsesc" });
    }

    try {
      const alcoholPreferences = [alcohol];
      const dietaryPreferences = alimentare;
      // Сохраняем в MongoDB
      await new FormSubmission({
        type: "family",
        name,
        dietary_preferences: dietaryPreferences,
        allergies: allergies || "Nu sunt",
        alcohol_preferences: alcoholPreferences,
      }).save();

      // Формируем сообщение
      const message = `
  🎉 A fost completat un nou formular!\n\n
  👤 Nume: <b>${name}</b>\n
  🥗 Preferință alimentară: ${dietaryPreferences}\n
  🍷 Alcool preferat: ${alcoholPreferences.join(", ") || "Niciunul"}\n
  ⚠️ Alergii: ${allergies || "Nu sunt"}
      `;

      await sendTelegramNotifications(message);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/solo", async (req, res) => {
    const { name, dietaryPreferences, allergies, alcoholPreferences } =
      req.body;

    if (!name || !dietaryPreferences || !alcoholPreferences) {
      return res
        .status(400)
        .json({ error: "Toate câmpurile obligatorii lipsesc" });
    }

    try {
      // Сохраняем в MongoDB
      await new FormSubmission({
        type: "solo",
        name,
        dietary_preferences: dietaryPreferences,
        allergies: allergies || "Nu sunt",
        alcohol_preferences: alcoholPreferences,
      }).save();

      // Формируем сообщение
      const message = `
🎉 A fost completat un nou formular!\n\n
👤 Nume: <b>${name}</b>\n
🥗 Preferință alimentară: ${dietaryPreferences}\n
🍷 Alcool preferat: ${alcoholPreferences.join(", ") || "Niciunul"}\n
⚠️ Alergii: ${allergies || "Nu sunt"}
    `;

      await sendTelegramNotifications(message);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Telegram Bot Handlers
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.chat.first_name || "";
    const lastName = msg.chat.last_name || "";

    try {
      const exists = await Subscriber.findOne({ chat_id: chatId });

      if (!exists) {
        await new Subscriber({
          chat_id: chatId,
          first_name: firstName,
          last_name: lastName,
        }).save();

        await bot
          .sendMessage(
            chatId,
            `Bună, ${firstName}! Mulțumim pentru începerea botului.\nVeți fi notificat când cineva va trimite un formular.`
          )
          .catch((err) => {});
      } else {
        await bot
          .sendMessage(chatId, `Salut din nou, ${firstName}!`)
          .catch((err) => {});
      }
    } catch (error) {
      console.error("Error handling /start command:", error);
    }
  });

  // Функция отправки уведомлений
  async function sendTelegramNotifications(message) {
    try {
      const subscribers = await Subscriber.find({});
      for (const sub of subscribers) {
        try {
          await bot
            .sendMessage(sub.chat_id, message, { parse_mode: "HTML" })
            .catch((err) => {});
        } catch (error) {
          console.error(`Failed to send to ${sub.chat_id}:`, error.message);
          // Можно удалить неактивных подписчиков
          if (error.response?.body?.description?.includes("blocked")) {
            await Subscriber.deleteOne({ chat_id: sub.chat_id });
          }
        }
      }
    } catch (error) {
      console.error("Error sending notifications:", error);
    }
  }

  // Запуск сервера
  app.listen(PORT, () => {
    console.log(`Serverul rulează pe http://localhost:${PORT}`);
  });
};

// 5. Переподключение при ошибках
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;

async function reconnect() {
  reconnectAttempts++;
  const delay = Math.min(2000 * reconnectAttempts, 30000); // экспоненциальная задержка до 30 сек

  console.log(`🔄 Попытка переподключения #${reconnectAttempts}...`);

  // Если попытки закончились — выходим
  if (reconnectAttempts > MAX_RECONNECT_ATTEMPTS) {
    console.error("❌ Максимальное число попыток подключения, завершение...");
    process.exit(1); // или можно уведомить админа через другой канал
    return;
  }

  setTimeout(async () => {
    // Проверяем, есть ли интернет перед попыткой
    const hasInternet = await checkInternet();

    if (!hasInternet) {
      console.log("📡 Нет интернета! Следующая попытка через 10 сек...");
      setTimeout(reconnect, 10000);
      return;
    }

    // Останавливаем старый инстанс бота (если он был)
    if (bot?.stopPolling) bot.stopPolling();

    // Запускаем заново
    startBot();
  }, delay);
}

// 6. Дополнительно: проверка интернета раз в 30 секунд
setInterval(async () => {
  const isOnline = await checkInternet();
  if (!isOnline) {
    console.log("🔴 Интернет пропал! Пытаюсь переподключиться...");
    await reconnect();
  }
}, 30000);

run();
