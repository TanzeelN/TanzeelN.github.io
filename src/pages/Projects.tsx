import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/ProjectData";

export default function Projects() {
  return (
    <Container className="py-4">
      <Row className="g-4">
        {projects.map((p) => (
          <Col key={p.title} xs={12} sm={6} lg={4}>
            <ProjectCard project={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
