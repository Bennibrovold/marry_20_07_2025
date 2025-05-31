import styled from "styled-components";
import { media } from "../shared/media/media";
import RELATIVES_AND_FRIENDS from "../assets/relatives-and-friends.svg";
import RELATIVES_AND_FRIENDS_MOBILE from "../assets/relatives-and-friends-mobile.svg";
import SEVEN from "../assets/7.jpg";
import EIGHT from "../assets/8.jpg";
import { useMatchMedia } from "../shared/media/use-match-media";

export const RelativesAndFriends = () => {
  const md = useMatchMedia((x) => x.less.md);
  return (
    <Wrapper>
      <Text>Scumpii noștri!</Text>
      <Content>
        Foarte curând va avea loc unul dintre cele mai importante evenimente din
        viața noastră și am dori să împărtășim această zi cu voi.
        <br />
        <br />
        Nunta noastră!
        <br />
        <br />
        Cu cea mai mare bucurie vă invităm la nunta noastră.
      </Content>
      <Images>
        <Img1 src={SEVEN} />
        <Img2 src={EIGHT} />
      </Images>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px auto;
  margin-top: 120px;
  height: 100vh;
  max-width: 760px;
  flex-direction: column;
  align-items: center;

  display: flex;
  gap: 48px;

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    width: auto;
    max-width: 424px;
    height: auto;
  }
`;

const TextImage = styled.img`
  height: 70px;
`;

const Text = styled.span`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
`;

const Content = styled.div`
  ${media.pure.less(media.size.md)} {
    font-size: 22px;
  }

  ${media.pure.less(media.size.sm)} {
    font-size: 18px;
  }
`;

const Images = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  ${media.pure.less(media.size.md)} {
    gap: 8px;
  }

  ${media.pure.less(media.size.md)} {
    img {
      height: 280px;
    }
  }
`;

const Img1 = styled.img`
  width: 50%;
  margin-bottom: 120px;
  height: calc(100% - 40%);
  object-fit: cover;
`;
const Img2 = styled.img`
  width: 50%;
  margin-top: 120px;
  height: calc(100% - 40%);
  object-fit: cover;
`;
