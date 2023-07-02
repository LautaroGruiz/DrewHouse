import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { ContextoDeProductos } from "../../Context/ProductosContext";

function TablaMostrarProduct() {
  const { productos, deleteProduct } = useContext(ContextoDeProductos);

  return (
    <>
      {productos === undefined ? (
        <h3>Sin Productos</h3>
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
            {productos.map((producto, id) => (
              <tr key={id}>
                <td>{producto.producto}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(id)}
                    className="btn btn-warning"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default TablaMostrarProduct;
