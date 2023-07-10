import { useState, useContext } from "react";
import { Container, Nav, Navbar, Modal, NavDropdown } from "react-bootstrap";
import ModalIiniciarSesion from "../MODAL INICIAR-SESION/ModalIiniciarSesion";
import { ContextoDeUsuarios } from "../../Context/UsersContext";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iniciarSesion = () => {
    handleShow();
  };

  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));
  const usuarioEmail = usuarioLogeado ? usuarioLogeado.email : null;
  const { logOut } = useContext(ContextoDeUsuarios);

  return (
    <>
      <Navbar expand="lg" className="headerPrincipal">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="LogoHeader"
              src="src\Image\HEADER-IMAGE\drewhouse_horizontal_logo_1652x.png"
              alt="LOGO DREW HOUSE"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {usuarioLogeado !== null ? (
                <>
                  <Nav.Link className="titulosDeNav" href="/tienda">
                    Tienda
                  </Nav.Link>
                  <NavDropdown
                    className="titulosDeNav"
                    title={usuarioLogeado.nombreDeUsuario}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>Mi cuenta</NavDropdown.Item>
                    {usuarioEmail === "admin@gmail.com" && (
                      <NavDropdown.Item href="/addProducto">
                        Control de Stock
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link className="titulosDeNav" href="/tienda">
                    tienda
                  </Nav.Link>
                  <Nav.Link className="titulosDeNav" onClick={iniciarSesion}>
                    iniciar sesión
                  </Nav.Link>
                  <Nav.Link className="titulosDeNav" href="/Registrarse">
                    registrarse
                  </Nav.Link>
                </>
              )}
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
