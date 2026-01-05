import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <Navbar className="header-bar">
      <Container fluid>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/journey">
            Journey
          </Nav.Link>

          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>

          <Nav.Link as={Link} to="/contact">
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
