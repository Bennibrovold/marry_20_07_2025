import { useState } from "react";
import styled from "styled-components";
import FIRST from "../assets/1.jpg";

export const ThirdForm = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  // Обработчик изменения текстового поля
  const handleTextChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4444/api/reject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Eroare de rețea:", error);
      alert("A apărut o eroare la trimitere.");
    }
  };

  return (
    <Container>
      {/* Фотография */}
      <ImageContainer>
        <Image src={FIRST} alt="Свадебная пара" />
      </ImageContainer>

      <Group>
        {/* Заголовок и описание */}
        <Description>
          Completați, vă rugăm, formularul, pentru a ști că nu veți putea veni.
        </Description>

        {/* Форма */}
        {success ? (
          <Green>Mulțumesc</Green>
        ) : (
          <Form onSubmit={handleSubmit}>
            {/* Имя и фамилия */}
            <SectionTitle>Numele și prenumele dumneavoastră</SectionTitle>
            <TextInput
              name="name"
              value={formData.name}
              onChange={handleTextChange}
              placeholder="Иван Смирнов"
            />

            {/* Кнопка отправки */}
            <SubmitButton type="submit">Trimite</SubmitButton>
          </Form>
        )}
      </Group>
    </Container>
  );
};

const Green = styled.div`
  background: #62c584;
  color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0px;
  background-color: #f9f9f9;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 0px;
  max-height: 600px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-family: "Montserrat", Arial, sans-serif;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Group = styled.div`
  padding: 40px 45px;
  padding-top: 0px;

  p {
    text-align: left;
  }
`;
