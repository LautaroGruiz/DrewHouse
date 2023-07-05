import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/tienda">Tienda</Nav.Link>
              <Nav.Link href="/InicioDeSesion">Iniciar sesion</Nav.Link>
              <Nav.Link href="/Registrarse">Registrarse</Nav.Link>
              <Nav.Link href="/addProducto">Administrador</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
