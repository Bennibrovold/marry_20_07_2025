import styled, { keyframes } from "styled-components";
import { useMatchMedia } from "../shared/media/use-match-media";
import FIRST from "../assets/1.jpg";
import { media } from "../shared/media/media";
import MJ from "../assets/1.svg";
import MJ_MOBILE from "../assets/2.svg";
import ARROW_DOWN from "../assets/arrow_down.webp";
import ARROW_DOWN_WHITE from "../assets/arrow_down_white.webp";

export const Invite = () => {
  const sm = useMatchMedia((x) => x.less.md);

  return (
    <Wrapper>
      <Photo>
        {sm ? null : <Image src={FIRST} />}
        {sm ? (
          <Description>
            <Text>Invitație la nuntă</Text>
            <IgorValentina>Igor and Valentina</IgorValentina>
            <Text>30/07/2025</Text>
            <Arrow src={ARROW_DOWN_WHITE} />
          </Description>
        ) : null}
      </Photo>
      {sm ? null : (
        <Description>
          <span>Invitație la nuntă</span>
          <IgorValentina>Igor and Valentina</IgorValentina>
          <span>30/07/2025</span>
          <Arrow src={ARROW_DOWN} />
        </Description>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px auto;
  height: 100vh;

  display: flex;
  align-items: center;
  gap: 48px;
  width: calc(460px + 460px + 48px);

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    width: auto;
  }
`;

const Photo = styled.div`
  position: relative;

  ${media.pure.less(media.size.md)} {
    background-position: 48.056% 23.953%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${FIRST});
    width: 100vw;
    height: 100vh;
  }
`;
const Image = styled.img`
  width: 460px;
  height: 100%;
  height: 700px;

  ${media.pure.less(media.size.md)} {
    width: 100vw;
    height: auto;
    background-attachment: scroll;
    background-position: 48.056% 23.953%;
  }
`;
const ImageMJ = styled.img`
  width: 134px;
  flex-grow: 1;
`;

const ImageMJMobile = styled.img`
  ${media.pure.less(media.size.md)} {
    margin: 0px 20px;
  }
`;
const Description = styled.div`
  width: 460px;
  max-height: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px;
  position: relative;
  z-index: 1;

  span {
    margin: 60px 0px;
  }

  ${media.pure.less(media.size.md)} {
    padding: 0px 16px;
    position: absolute;
    width: 100vw;
    bottom: 120px;
    max-height: initial;
    height: auto;

    span {
      margin: 25px 0px;
    }

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: calc(100% - 40px);
      bottom: 40px;
      box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 1);
      border-color: transparent;
      border-style: solid;
      opacity: 0.5;
      z-index: -1;
      background: rgba(0, 0, 0, 1); /* Тёмный оверлей для контраста */
      backdrop-filter: blur(10px);
    }
  }
`;

const Text = styled.span`
  text-size-adjust: auto;
  transform-origin: center center;
  line-height: 25px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
  background-size: cover;
`;

const movement = keyframes`
    0% {
        transform: translateY(-50%);
    }

    50% {
        transform: translateY(0%);
    }

    100% {
        transform: translateY(-50%);
    }
`;

const Arrow = styled.img`
  animation: ${movement} 2s linear infinite;
  width: 42px;
`;

const IgorValentina = styled.span`
  font-family: "Dancing Script", cursive;
  font-size: 50px;

  ${media.pure.less(media.size.md)} {
    color: white;
  }
`;
