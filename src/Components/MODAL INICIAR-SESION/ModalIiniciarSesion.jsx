import { useState, useContext } from "react";
import { ContextoDeUsuarios } from "../../Context/UsersContext";
import { Col, Container, Row, Button } from "react-bootstrap";

const ModalIiniciarSesion = () => {
  const [email, setEmail] = useState();
  const [contraseña, setContraseña] = useState();

  const { users } = useContext(ContextoDeUsuarios);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = users.find(user => user.email === email && user.contraseña === contraseña);
      if (user) {
        alert("Usuario Encontrado")
      }
      else {
        alert("Usuario no encontrado")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  aria-describedby="producto"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Contraseña
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  name="contraseña"
                  aria-describedby="precio"
                />
              </div>
              <Button type="submit" variant="outline-success">
                {" "}
                Ingresar{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModalIiniciarSesion;
