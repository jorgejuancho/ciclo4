import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css'

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: "",
      pass: "",
    };
  }
  iniciarSesion() {
    alert("Boton de Iniciar Sesión");
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col
          sm="12"
          xs="12"
          md={{span:4, offset: 4}}
          lg={{span:4, offset: 4 }}
          xl={{span:4, offset: 4 }}
                    >
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label >Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                    placeholder="Ingresa  tu Usuario"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu Contraseña"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Button
                  variant="success"
                  onClick={(e) => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
