import { Table, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ContextoDeProductos } from "../../Context/ProductosContext";
import ModalEditar from "../MODAL EDITAR/ModalEditar";

function TablaMostrarProduct() {
  const { productos, deleteProduct } = useContext(ContextoDeProductos);
  const [productoEditado, setProductoEditado] = useState(null); // Aquí se corrige el useState

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editarProducto = (producto) => {
    console.log(producto, "Producto traido desde tabla");
    setProductoEditado(producto);
    handleShow();
  };

  return (
    <>
      {productos === undefined ? (
        <h1>No hay productos disponibles</h1>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.producto}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(producto.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => editarProducto(producto)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalEditar productoEditado={productoEditado} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TablaMostrarProduct;
