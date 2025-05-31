import { useEffect, useState } from "react";
import styled from "styled-components";
import TIMER from "../assets/timer.webp";

// Функция для форматирования чисел с двумя цифрами
const padZero = (num: number) => {
  return num.toString().padStart(2, "0");
};

// Функция для вычисления оставшегося времени
function calculateTimeLeft(targetDate: any) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const targetDate = new Date("2025-07-30T00:00:00"); // Дата свадьбы

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  // Эффект для обновления таймера каждую секунду
  useEffect(() => {
    // Инициализируем время
    const initialTimeLeft = calculateTimeLeft(targetDate);
    setTimeLeft(initialTimeLeft);

    // Обновляем таймер каждую секунду
    const interval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);

      // Если время закончилось, останавливаем таймер
      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <Overlay />
      <Content>
        <Title>Noi așteptăm cu nerăbdare întîlnirea cu voi!</Title>
        <Subtitle>Până la nunta noastră a rămas…</Subtitle>
        <TimerContainer>
          <TimerItem>
            <span>{padZero(timeLeft.days)}</span>
            <span>days</span>
          </TimerItem>
          <TimerItem>
            <span>{padZero(timeLeft.hours)}</span>
            <span>hours</span>
          </TimerItem>
          <TimerItem>
            <span>{padZero(timeLeft.minutes)}</span>
            <span>minutes</span>
          </TimerItem>
          <TimerItem>
            <span>{padZero(timeLeft.seconds)}</span>
            <span>seconds</span>
          </TimerItem>
        </TimerContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${TIMER}); /* Замените на ваш фон */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  color: white;
  font-family: "Roboto", sans-serif;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  text-align: center;
  max-width: 760px;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
  font-family: "Dancing Script", cursive;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 30px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;

  span {
    font-size: 60px;
    font-weight: normal;
    opacity: 0.8;
    &:last-child {
      font-size: 30px;
      font-family: "Dancing Script", cursive;
    }
  }
`;
