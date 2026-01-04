import { Button, Container, Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ScrambledText from "../components/ScrambleText";
import profileImg from "../assets/Cat-Profile-Pic.webp";

export default function Home() {
  return (
    <Container fluid className="page-section">
      <Row className="home-page-title">
        <Col>
          <div style={{ fontSize: 40 }}>Hi, I'm Tanzeel Naz</div>

          <div
            style={{
              fontSize: 25,
              marginTop: "-12px",
              color: "#d1d5db39",
            }}
          >
            <ScrambledText Text="Finance Data Analyst" />
          </div>
        </Col>
      </Row>

      <Row className="home-page-details">
        <Col>
          <div className="details-box">
            <div>
              Currently, I'm working at an insurance company building & managing
              forecasting models, <br />
              automating processes & creating applications for company-wide use
              by leveraging R, SQL & VBA. <br />
              In my free time, I enjoy completing machine learning projects with
              python & creating dashboards to visualise datasets. <br />
              Outside of coding, I do a lot of hiking, compete in squash &
              currently learning how to draw.
            </div>
          </div>
          <div className="mt-5 text-white mb-5 ps-2">
            Feel free to click the boxes below to view my professional journey
            or some pet projects I've been working on.
          </div>
          <Row>
            <Col className="text-center">
              <Button className="me-5">My Journey</Button>
              <Button>Pet Projects</Button>
            </Col>
          </Row>
        </Col>
        <Col
          className="text-center"
          style={{
            marginBottom: "50px",
          }}
        >
          <Image
            src={profileImg}
            alt="Profile"
            fluid
            roundedCircle
            style={{ maxWidth: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
