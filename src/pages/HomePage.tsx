import { Container } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import ScrambledText from "../components/ScrambleText";



export default function Home() {
  return (
    <Container fluid className="page-section">
      <Row className="home-page">
        <Col className="text-center">
        <div>Tanzeel</div>
        <div style={{fontSize:14}}>
        <ScrambledText Text="Finance Data Analyst"/>
        </div>
        <div>
          Currently, Working in insurance with a key focus in automating finance processes & develop applications for company-wide use. 
          The main programming languages I use here are R, SQL & VBA. Have a strong interest in development & data analaysis. I enjoy analysing
          datasets & applying machine learning algorithms.
        </div>

        </Col>
      </Row>
    </Container>

  );
}
