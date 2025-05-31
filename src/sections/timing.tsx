import styled from "styled-components";
import { media } from "../shared/media/media";

export const Timing = () => {
  return (
    <TimelineSection>
      <Title>Timing</Title>

      <TimelineList>
        <TimelineItem>
          <Time>11:30</Time>
          <Description>Cununia religioasă (wedding ceremony)</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>14:30</Time>
          <Description>Photos</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>18:00</Time>
          <Description>Welcome 🤍</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>18:30</Time>
          <Description>Jurămintele 💍</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>20:00</Time>
          <Description>wedding dinner 🍽️</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>21:00</Time>
          <Description>Primul dans</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>23:00</Time>
          <Description>Toasts 🥂</Description>
        </TimelineItem>
        <TimelineItem>
          <Time>01:00</Time>
          <Description>Cake 🎂</Description>
        </TimelineItem>
      </TimelineList>
    </TimelineSection>
  );
};

const TimelineSection = styled.section`
  padding: 4rem 2rem;
  margin: 0px auto;
  max-width: 760px;
  text-align: center;

  ${media.pure.less(media.size.md)} {
    padding: 0px 16px;
  }
`;

const Title = styled.h1`
  font-family: "Dancing Script", sans-serif;
  font-size: 3.5rem;
  line-height: 1.2;
  color: #333;
  margin-bottom: 3rem;

  span {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    color: #000;
  }
`;

const TimelineList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TimelineItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding: 1rem 0px;

  &:last-child {
    border-bottom: none;
  }

  ${media.pure.less(media.size.md)} {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
`;

const Time = styled.span`
  font-family: "Dancing Script", sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #333;
  margin-right: 1rem;
  width: 100px;

  ${media.pure.less(media.size.md)} {
    font-size: 28px;
    width: 60px;
  }
`;

const Description = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #333;
  margin-left: 32px;
  text-align: left;
`;
