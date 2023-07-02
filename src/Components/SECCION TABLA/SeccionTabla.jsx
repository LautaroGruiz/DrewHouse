import { Col, Container, Row } from "react-bootstrap";
import TablaMostrarProduct from "../TABLA/TablaMostrarProduc";
import "./SeccionTabla.css"

const SeccionTabla = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="titulo-productos-tabla">Tabla de Productos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <TablaMostrarProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default SeccionTabla;
