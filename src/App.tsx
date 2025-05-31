import "./App.css";
import { Ceremony } from "./sections/ceremony";
import { Date } from "./sections/date";
import { Invite } from "./sections/invite";
import { RelativesAndFriends } from "./sections/relatives-and-friends";
import CEREMONY from "./assets/ceremony.svg";
import CEREMONY_IMAGE from "./assets/ceremony_image.jpg";
import LOCATION from "./assets/location.svg";
import LOCATION_IMAGE from "./assets/location_image.jpg";
import { Timing } from "./sections/timing";
import DressCodeBlock from "./sections/dess-code";
import { Container } from "./shared/container";
import { WishesBlock } from "./sections/wishes";
import ChatBlock from "./sections/chat";
import PresenceConfirmation from "./sections/presence";
import { Timer } from "./sections/timer";
import { FadeInSection } from "./shared/fade-section";

function App() {
  return (
    <>
      <FadeInSection>
        <Container>
          <Invite />
        </Container>
      </FadeInSection>
      <FadeInSection>
        <RelativesAndFriends />
      </FadeInSection>
      <FadeInSection>
        <Date />
      </FadeInSection>
      <FadeInSection>
        <Ceremony
          titleImg={LOCATION}
          text={<>Restaurant | Lago Event Park | Dănceni</>}
          sectionImg={LOCATION_IMAGE}
        />{" "}
      </FadeInSection>
      <FadeInSection>
        <Timing />
      </FadeInSection>
      <FadeInSection>
        <DressCodeBlock />
      </FadeInSection>
      <FadeInSection>
        <WishesBlock />
      </FadeInSection>
      <FadeInSection>
        <ChatBlock />
      </FadeInSection>
      <FadeInSection>
        <PresenceConfirmation />
      </FadeInSection>
      <Timer />
    </>
  );
}

export default App;
