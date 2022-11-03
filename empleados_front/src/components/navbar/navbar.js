/* imr para importar el react */
import React from "react";
import { Container, Nav, Navbar, DropdownButton,Dropdown,Row } from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
    return (
      // fixed top hace que la barra de navegacion quede fija en la pagina
      <Navbar fixed="top" bg="success" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">Nosabo.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Primaria</Nav.Link>
              <Nav.Link href="#link">Bachillerato</Nav.Link>
              <Nav.Link href="#link">Universidad</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" variant="success" title="Usuario">
              <Dropdown.Header>
                <Row>
              <FontAwesomeIcon icon={faUserGraduate} />
                </Row>
                <Row>
                  #USUARIO#
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider/>
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
