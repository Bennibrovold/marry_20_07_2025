import React from "react";
import styled from "styled-components";

export const WishesBlock = () => {
  return (
    <Container>
      <Title>Din preferințele noastre </Title>

      <Section>
        <Text>
          Știm că este obișnuit să oferi flori de nuntă. Dacă alegeți să faceți
          un astfel de cadou, ne-ar bucura în mod deosebit niște trandafiri albi
          fără ambalaj. Aceste flori minunate vor deveni o decorație
          suplimentară pentru nunta noastră.
        </Text>
      </Section>

      <Section>
        <Text>
          Vom fi bucuroși să vă avem pe voi și pe copiii voștri, dar suntem
          siguri că micuții vor fi mai confortabil acasă, decât într-un mediu
          zgomotos de sărbătoare.
        </Text>
      </Section>

      <Section>
        <Text>
          Apreciem foarte mult prezența voastră la evenimentul nostru. Vă rugăm
          să nu întârziați, pentru ca noi să putem împărtăși cu voi această zi
          în mod complet. Mulțumim pentru atenția acordată acestui detaliu.
        </Text>
      </Section>
    </Container>
  );
};

// Стили
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 36px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid black;
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
`;

const Text = styled.p`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
  color: #333;
  margin: 8px;
`;
