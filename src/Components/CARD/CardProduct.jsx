import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ContextoDeProductos } from "../../Context/ProductosContext";

const CardProduct = () => {
  const { productos } = useContext(ContextoDeProductos);
  console.log(productos);

  return (
    <>
      {productos === undefined ? (
        <h1>Cargando...</h1>
      ) : (
        productos.map((producto) => (
          <Card key={producto.id} className="fila-uno-home">
            <Card.Body>
              <Card.Title className="tituloDeProducto">
                {producto.producto}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                ${producto.precio} ARS <br />
                Stock: {producto.stock}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};

export default CardProduct;
