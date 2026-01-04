import { Container } from "react-bootstrap";
import { Navbar, Nav} from "react-bootstrap";


export default function HeaderBar() {
    return(
            
            <Navbar className="header-bar">
                <Container fluid>
                
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Journey</Nav.Link>
                        <Nav.Link>Projects</Nav.Link>
                        <Nav.Link>Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            

        
    )
}