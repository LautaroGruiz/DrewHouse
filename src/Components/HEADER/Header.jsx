import { useState } from "react";
import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import ModalIiniciarSesion from "../MODAL INICIAR-SESION/ModalIiniciarSesion";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iniciarSesion = () => {
    handleShow();
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/tienda">Tienda</Nav.Link>
              <Nav.Link onClick={iniciarSesion}>
                Iniciar sesion
              </Nav.Link>
              <Nav.Link href="/Registrarse">Registrarse</Nav.Link>
              <Nav.Link href="/addProducto">Administrador</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresa tu usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalIiniciarSesion handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
