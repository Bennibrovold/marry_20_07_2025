import React from "react";
import styled from "styled-components";
import groupImageSrc from "../assets/group.png";
import groupBG from "../assets/group_bg.jpg";
import { media } from "../shared/media/media";

const DressCodeBlock = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          <h2>Dress code</h2>
          <span>/ black tie</span>
        </Title>
        <Images>
          <GroupImage src={groupImageSrc} alt="Wedding guests" />
        </Images>
        <Text>
          Noi am ales tematica neagră pentru nunta noastră, pentru a crea o
          atmosferă elegantă și stilată. Vom fi recunoscători dacă ne veți
          susține în această alegere dând preferința aceste game colore și
          stilistice.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default DressCodeBlock;

// Стили
const Container = styled.div`
  position: relative;
  min-height: 80vh;
  background: #000;
  background-image: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  width: calc(100vw - 15px);
  background-image: url(${groupBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply; // Эффект накладки для создания текстуры
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h2 {
    font-family: "Dancing Script", cursive;
    font-size: 48px;
    color: #fff;
    margin: 0;
  }

  span {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
    color: #fff;
    opacity: 0.7;
    margin-top: 8px;
  }
`;

const GroupImage = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  width: 500px;

  ${media.pure.less(media.size.md)} {
    width: 100%;
  }
`;

const Text = styled.p`
  vertical-align: middle;
  color: #ffffff;
  font-size: 20px;
  font-family: "Montserrat", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 300;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  line-height: 31px;
`;

const Images = styled.div``;
