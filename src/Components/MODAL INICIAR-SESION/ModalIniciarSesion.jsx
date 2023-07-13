import { useState, useContext } from "react";
import { ContextoDeUsuarios } from "../../Context/UsersContext";
import { Col, Container, Row, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./ModalIniciarSesion.css" 

const ModalIiniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { users } = useContext(ContextoDeUsuarios);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = users.find(
        (user) => user.email === email && user.contraseña === contraseña
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        const tagUsuario = JSON.parse(localStorage.getItem("user"));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido " + tagUsuario.nombreDeUsuario,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label textoLabelEmail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control inputIniciarSesion"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  aria-describedby="producto"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contraseña" className="form-label textoLabelEmail">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control inputIniciarSesion"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  name="contraseña"
                />
              </div>
              <Button type="submit" variant="outline-success" className="botonIniciarSesion">
                Ingresar
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModalIiniciarSesion;
