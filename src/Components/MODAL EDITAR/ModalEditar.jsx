import { useState, useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ContextoDeProductos } from "../../Context/ProductosContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ModalEditar = ({ productoEditado, handleClose }) => {
  const [producto, setProducto] = useState(productoEditado);
  const { putProducto } = useContext(ContextoDeProductos);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    putProducto(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto editado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
    handleClose();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="mb-3">
                <label htmlFor="producto" className="form-label">
                  Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.producto}
                  onChange={handleChange}
                  name="producto"
                  aria-describedby="producto"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={producto.precio}
                  onChange={handleChange}
                  name="precio"
                  aria-describedby="precio"
                />
              </div>
              <div className="mb-3 cajaInput">
                <label
                  htmlFor="imagen"
                  className="form-label textosFormularioRegistrar"
                >
                  URL de la imagen
                </label>
                <input
                  type="url"
                  className="form-control"
                  value={producto.imagen}
                  onChange={handleChange}
                  name="imagen"
                  aria-describedby="imagen"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={producto.stock}
                  onChange={handleChange}
                  name="stock"
                  aria-describedby="stock"
                />
              </div>

              <Button type="submit" variant="outline-success">
                {" "}
                Editar Producto{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModalEditar;
