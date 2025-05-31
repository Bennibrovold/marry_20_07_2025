import styled from "styled-components";
import { media } from "../shared/media/media";
import DATE_IMG from "../assets/date.svg";

export const Date = () => {
  return (
    <Wrapper>
      <Title>Data evenimentului</Title>
      <Text>Salvați această zi pentru sărbătoarea noastră:</Text>
      <DateBlock>
        <Number>30</Number>
        <Divider />
        <Number>07</Number>
      </DateBlock>
      <Text>Vom fi bucuroși să împărțim această zi cu voi!</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px auto;
  margin-top: 120px;
  height: 640px;
  max-width: 760px;
  flex-direction: column;
  align-items: center;

  display: flex;
  gap: 48px;

  ${media.pure.less(media.size.md)} {
    flex-direction: column;
    width: auto;
    max-width: 424px;
  }
`;

const Title = styled.span`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
`;
const Text = styled.span`
  line-height: 31px;
  vertical-align: middle;
  color: #000000;
  font-size: 20px;
  font-family: "Montserrat", Arial, sans-serif;
  line-height: 1.55;
  font-weight: 300;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
`;
const DateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const Number = styled.span`
  text-size-adjust: auto;
  transform-origin: center center;
  line-height: 85px;
  font-size: 55px;
  background-size: cover;
  font-family: "Dancing Script", cursive;
  font-weight: 100;
  vertical-align: middle;
  color: #000000;
  font-size: 68px;
  line-height: 1.55;
  font-weight: 100;
  background-position: center center;
  border-color: transparent;
  border-style: solid;

  &:first-child {
    margin-bottom: 60px;
  }
  &:last-child {
    margin-top: 60px;
  }
`;
const Divider = styled.div`
  transform: rotate(30deg);
  height: 80px;
  width: 1px;
  background-color: black;
`;
