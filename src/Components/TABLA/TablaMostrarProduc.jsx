import { Table, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ContextoDeProductos } from "../../Context/ProductosContext";
import ModalEditar from "../MODAL EDITAR/ModalEditar";
import "./TablaMostrarProduc.css";

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
        <Table responsive className="tablaProductos">
          <thead>
            <tr>
              <th className="titulosTabla thProducto">Producto</th>
              <th className="titulosTabla thPrecio">Precio</th>
              <th className="titulosTabla thPrecio">Stock</th>
              <th className="titulosTabla thPrecio sinborde">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td className="tdProducto">{producto.producto}</td>
                <td className="tdProducto">${producto.precio}</td>
                <td className="tdProducto">{producto.stock}</td>
                <td className="tdProducto">
                  <button
                    onClick={() => deleteProduct(producto.id)}
                    className="btn btn-danger botonEliminar"
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning botonEditar"
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
          <ModalEditar
            productoEditado={productoEditado}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TablaMostrarProduct;
