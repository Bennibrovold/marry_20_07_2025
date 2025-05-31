import mongoose from "mongoose";

// Подключение к MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merriage", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected, блять!");
  } catch (err) {
    console.error("Ошибка подключения к MongoDB:", err);
    process.exit(1);
  }
};

// Схема подписчика
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  createdAt: { type: Date, default: Date.now },
});

// Модель
const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// Экспортируем всё нужное
export { connectDB, Subscriber };
