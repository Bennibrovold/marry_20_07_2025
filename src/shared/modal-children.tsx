import { useState } from "react";
import styled from "styled-components";
import FIRST from "../assets/1.jpg";

export const GuestForm = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    dietaryPreferences: "no_meat",
    allergies: "",
    alcoholPreferences: ["sparkling_wine"],
    name: "",
  });

  // Обработчик изменения радио-кнопок
  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      dietaryPreferences: e.target.value,
    }));
  };

  // Обработчик изменения чекбоксов
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        alcoholPreferences: [...prevData.alcoholPreferences, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        alcoholPreferences: prevData.alcoholPreferences.filter(
          (item) => item !== value
        ),
      }));
    }
  };

  // Обработчик изменения текстового поля
  const handleTextChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4444/api/solo", {
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
        <Title>Formular pentru invitați</Title>
        <Description>
          Vrem ca nunta să fie perfectă nu doar pentru noi, ci și pentru voi. Vă
          rugăm să completați un scurt chestionar despre meniul de banchet.
        </Description>

        {/* Форма */}
        {success ? (
          <Green>Mulțumesc</Green>
        ) : (
          <Form onSubmit={handleSubmit}>
            {/* Вкусовые предпочтения */}
            <SectionTitle>Preferințe alimentare:</SectionTitle>
            <RadioGroup>
              <Label>
                <RadioButton
                  value="no_meat"
                  checked={formData.dietaryPreferences === "no_meat"}
                  onChange={handleRadioChange}
                />
                Nu mănânc carne
              </Label>
              <Label>
                <RadioButton
                  value="no_fish"
                  checked={formData.dietaryPreferences === "no_fish"}
                  onChange={handleRadioChange}
                />
                Nu mănânc pește
              </Label>
              <Label>
                <RadioButton
                  value="vegetarian"
                  checked={formData.dietaryPreferences === "vegetarian"}
                  onChange={handleRadioChange}
                />
                Sunt vegetarian/vegetariană
              </Label>
              <Label>
                <RadioButton
                  value="eat_all"
                  checked={formData.dietaryPreferences === "eat_all"}
                  onChange={handleRadioChange}
                />
                Mănânc de toate
              </Label>
            </RadioGroup>

            {/* Алергии */}
            <SectionTitle>Aveți alergii la anumite alimente?</SectionTitle>
            <TextInput
              name="allergies"
              value={formData.allergies}
              onChange={handleTextChange}
              placeholder="Da, am alergie la nuci"
            />

            {/* Предпочтения алкоголя */}
            <SectionTitle>Ce tip de alcool preferați?</SectionTitle>
            <p>Selectați una sau mai multe băuturi:</p>
            <CheckboxGroup>
              <Label>
                <Checkbox
                  value="sparkling_wine"
                  checked={formData.alcoholPreferences.includes(
                    "sparkling_wine"
                  )}
                  onChange={handleCheckboxChange}
                />
                Vin spumos
              </Label>
              <Label>
                <Checkbox
                  value="cognac"
                  checked={formData.alcoholPreferences.includes("cognac")}
                  onChange={handleCheckboxChange}
                />
                Konjak / Cognac (se poate folosi ambele)
              </Label>
              <Label>
                <Checkbox
                  value="whiskey"
                  checked={formData.alcoholPreferences.includes("whiskey")}
                  onChange={handleCheckboxChange}
                />
                Whisky
              </Label>
              <Label>
                <Checkbox
                  value="vodka"
                  checked={formData.alcoholPreferences.includes("vodka")}
                  onChange={handleCheckboxChange}
                />
                Vodcă
              </Label>
              <Label>
                <Checkbox
                  value="rum"
                  checked={formData.alcoholPreferences.includes("rum")}
                  onChange={handleCheckboxChange}
                />
                Rom
              </Label>
              <Label>
                <Checkbox
                  value="no_alcohol"
                  checked={formData.alcoholPreferences.includes("no_alcohol")}
                  onChange={handleCheckboxChange}
                />
                Nu voi consuma alcool
              </Label>
            </CheckboxGroup>

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

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
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

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const RadioGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  margin-right: 0.5rem;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5rem;
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
