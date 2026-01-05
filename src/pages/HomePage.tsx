import { Button, Container, Image } from "react-bootstrap";
import ScrambledText from "../components/ScrambleText";
import profileImg from "../assets/Cat-Profile-Pic.webp";

export default function Home() {
  return (
    <Container fluid className="page-section">
      <div className="homeV">
        <header className="homeV__header">
          <h1 className="homeV__name">Hi, I'm Tanzeel Naz</h1>
          <div className="homeV__title">
            <ScrambledText Text="Finance Data Analyst" />
          </div>
        </header>

        <div className="homeV__imageWrap">
          <Image
            src={profileImg}
            alt="Profile"
            roundedCircle
            className="homeV__avatar"
          />
        </div>

        <section className="homeV__card">
          <ul className="homeV__bullets">
            <li>
              <strong>Professional:</strong> Building & managing forecasting
              models at an insurance company,
              <br />
              automating workflows and internal applications using R, SQL & VBA.
            </li>

            <li>
              <strong>Free Time:</strong> Machine learning projects in{" "}
              <span className="tech">Python</span> and interactive{" "}
              <span className="tech">dashboards</span> to explore datasets.
            </li>

            <li>
              <strong>Outside of coding</strong>: hiking, competitive squash,
              and learning to draw.
            </li>
          </ul>
        </section>

        <p className="homeV__hint">
          Click below to explore my professional journey or pet projects.
        </p>

        <div className="homeV__actions">
          <Button
            variant="outline-light"
            className="homeV__btn"
            href="#/journey"
          >
            My Journey
          </Button>
          <Button
            variant="light"
            className="homeV__btn"
            href="#/projects"
          >
            Pet Projects
          </Button>
        </div>
      </div>
    </Container>
  );
}


