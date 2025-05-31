import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../shared/media/media";
import { Modal } from "../shared/modal";
import { GuestForm } from "../shared/modal-children";
import { SecondForm } from "../shared/second-form";
import { ThirdForm } from "../shared/third-form";

const PresenceConfirmation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  return (
    <Container>
      <Title>Confirmați prezența </Title>

      <Subtitle>
        Vă rugăm să vă confirmați prezența nu mai târziu de
        <br />
        <Date>20.07.2025</Date>
      </Subtitle>

      <ButtonsWrapper>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Voi fi prezent/ă
        </Button>
        <Button variant="primary" onClick={() => setIsModalOpen2(true)}>
          Voi fi cu pereche/familia
        </Button>
        <Button variant="secondary" onClick={() => setIsModalOpen3(true)}>
          Nu voi putea fi
        </Button>
      </ButtonsWrapper>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GuestForm />
      </Modal>
      <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
        <SecondForm />
      </Modal>
      <Modal isOpen={isModalOpen3} onClose={() => setIsModalOpen3(false)}>
        <ThirdForm />
      </Modal>
    </Container>
  );
};

export default PresenceConfirmation;

// Стили
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 30px;
`;

const Subtitle = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
  color: #333;
  margin-bottom: 40px;
`;

const Date = styled.span`
  font-weight: bold;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 120px;

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    button {
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "#000" : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "#fff" : "#333")};
  border: ${(props) =>
    props.variant === "primary" ? "none" : "1px solid #ccc"};
  padding: 15px 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: sans-serif;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#1a1a1a" : "#f5f5f5"};
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  color: #666;
`;

const Phone = styled.span`
  font-weight: bold;
  color: #000;
`;
