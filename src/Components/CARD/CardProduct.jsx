import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ContextoDeProductos } from "../../Context/ProductosContext";
import "./CardProduct.css";

const CardProduct = () => {
  const { productos } = useContext(ContextoDeProductos);
  console.log(productos);

  const detalleDelProducto = (producto) => {
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    window.location.href = "/detalle";
  };

  return (
    <>
      <div className="contenedorTienda">
        {productos === undefined ? (
          <h1>Cargando...</h1>
        ) : (
          productos.map((producto) => (
            <Card key={producto.id} className="cardTienda" onClick={() => detalleDelProducto(producto)}>
              <Card.Body className="bodyCardTienda">
                <Card.Title className="tituloDeProducto">
                  {producto.producto}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Img
                  src={producto.imagen}
                  className="imagenCardTienda"
                ></Card.Img>
                <Card.Text className="precioCardTienda">
                  ${producto.precio} ARS <br />
                </Card.Text>
                <button
                  className="botonVerMasCardTienda"
                  onClick={() => detalleDelProducto(producto)}
                >
                  Ver mas
                </button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default CardProduct;
