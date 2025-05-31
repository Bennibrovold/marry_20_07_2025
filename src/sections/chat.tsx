import React from "react";
import styled from "styled-components";
import CHAT_IMAGE from "../assets/chat.jpg";
import { useMatchMedia } from "../shared/media/use-match-media";

const ChatBlock = () => {
  const md = useMatchMedia((x) => x.less.md);

  if (md) {
    return (
      <ContainerMobile>
        <Title>Grup comun</Title>
        <Image src={CHAT_IMAGE} alt="Table decor" />
        <Text>
          Pentru comoditatea voastră am creat grup pe telegram, unde veți putea
          posta poze/video din seara nunții pentru a salva cât mai multe
          amintiri și de a fi pe fir cu toții.
        </Text>
        <Button>Acesează</Button>
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <LeftColumn>
        <Title>Grup comun</Title>
        <Text>
          Pentru comoditatea voastră am creat grup pe telegram, unde veți putea
          posta poze/video din seara nunții pentru a salva cât mai multe
          amintiri și de a fi pe fir cu toții.
        </Text>
        <Button>Acesează</Button>
      </LeftColumn>

      <RightColumn>
        <Image src={CHAT_IMAGE} alt="Table decor" />
      </RightColumn>
    </Container>
  );
};

export default ChatBlock;

// Стили
const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const LeftColumn = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 40px;
  text-align: left;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  max-width: 370px;
  width: 370px;
  height: 500px;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const ContainerMobile = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 10px;
`;
