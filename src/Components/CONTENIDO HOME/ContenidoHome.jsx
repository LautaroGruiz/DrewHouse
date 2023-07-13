import { useContext } from "react";
import { ContextoDeProductos } from "../../Context/ProductosContext";
import { Card } from "react-bootstrap";
import "./ContenidoHome.css";

const ContenidoHome = () => {
  const irComprarTodo = () => {
    window.location.href = "/tienda";
  };

  const { productos } = useContext(ContextoDeProductos);
  // Obtén los primeros 4 productos
  const primerosCuatroProductos = productos?.slice(0, 3);

  const detalleDelProducto = (producto) => {
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    window.location.href = "/detalle";
  };
  return (
    <>
      <div className="bannerWelcome">
        <p>
          welcome to <br /> drew house
        </p>
      </div>
      <div className="contenedorVistaPrevia">
        {/* Muestra los primeros 4 productos */}
        {primerosCuatroProductos &&
          primerosCuatroProductos.map((producto) => (
            <div key={producto.id}>
              {/* Renderiza los detalles del producto aquí */}
              <Card
                key={producto.id}
                className="cardTienda"
                onClick={() => detalleDelProducto(producto)}
              >
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
            </div>
          ))}
      </div>
      <div className="comprarTodo" onClick={irComprarTodo}>
        <img src="src\Image\HOME-IMAGE\modelosDrew.png" alt="" />
        <div className="textoComprarTodo">
          <h3>comprar todo</h3>
        </div>
      </div>
      <div className="contenedorSubscribir controlStockOjos">
        <div className="contenedorComunidad">
          <h4>Únete a la comunidad</h4>
          <div className="inputBoton">
            <input type="email" name="subscriptor" placeholder="email" />
            <button type="submit">subscribirse</button>
          </div>
        </div>
        <div className="ojosDrew">
          <div className="dibujoOjo"></div>
          <div className="dibujoOjo"></div>
        </div>
      </div>
    </>
  );
};

export default ContenidoHome;
