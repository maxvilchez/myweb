import {
  Container,
  HomeSection,
  Caption,
  PrimaryHeader,
  SecondaryHeader,
  AboutSection,
  Content,
  BackgroundVideo,
  BackgroundDimmer,
  Video,
  Title,
} from "./../layout";

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <HomeSection>
            <BackgroundVideo>
              <Video autoPlay muted loop poster="/img/postervideo.jpg">
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            </BackgroundVideo>
            <BackgroundDimmer></BackgroundDimmer>
            <Caption>
              <PrimaryHeader>Max Vilchez</PrimaryHeader>
              <SecondaryHeader>
                Web Developer, experiencia en JS, React, React Navite, PHP, Vue
              </SecondaryHeader>
            </Caption>
          </HomeSection>
          <AboutSection>
            <Title>Pronto, más cosas...</Title>
          </AboutSection>
        </Content>
      </Container>
    </>
  );
}
