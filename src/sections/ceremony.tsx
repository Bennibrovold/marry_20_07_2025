import styled from "styled-components";
import CEREMONY from "../assets/ceremony.svg";
import CEREMONY_IMAGE from "../assets/ceremony_image.jpg";
import { media } from "../shared/media/media";

export const Ceremony = ({ titleImg, text, sectionImg }) => {
  return (
    <CeremonySection>
      <TitleWrapper>
        <CeremonyTitle>
          <CeremonyTitleImg src={titleImg} />
        </CeremonyTitle>
        <div
          style={{
            borderLeft: "2px solid #ccc",
            height: "100%",
            marginLeft: "2rem",
          }}
        />
        <CeremonyDetails>{text}</CeremonyDetails>
      </TitleWrapper>

      <ImageContainer>
        <img src={sectionImg} alt="Wedding Invitation" />
      </ImageContainer>

      <Button>Deschide-ți harta </Button>
    </CeremonySection>
  );
};

const CeremonySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 760px;
  margin: 0px auto;
  margin-top: 200px;

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CeremonyTitleImg = styled.img`
  width: 100%;
  height: 60px;
`;

const CeremonyTitle = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  line-height: 1.2;
  color: #333;
  font-weight: normal;

  span {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    color: #000;
  }
`;

const CeremonyDetails = styled.div`
  text-align: left;
  color: #000000;
  font-size: 18px;
  font-family: "Montserrat", Arial, sans-serif;
  line-height: 1.3;
  font-weight: 300;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  position: relative;
  line-height: 23px;
  max-width: 450px;

  &:before {
    position: absolute;
    content: "";
    width: 1px;
    height: 70px;
    background-color: #000000;
    left: -32px;
    top: -20px;
  }

  ${media.pure.less(media.size.md)} {
    margin-left: 20px;
    &:before {
      position: absolute;
      content: "";
      width: 1px;
      height: 40px;
      background-color: #000000;
      left: -16px;
      top: -10px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-position: 0% 31.478%;
  }
`;

const Button = styled.a`
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-family: "Montserrat", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 400;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  border-width: 1px;
  background-color: #1b1b1b;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }

  ${media.pure.less(media.size.md)} {
    margin: 0px auto;
  }
`;
