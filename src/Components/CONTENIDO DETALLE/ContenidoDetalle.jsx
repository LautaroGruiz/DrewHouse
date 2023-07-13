import { useEffect, useState } from "react";
import "./ContenidoDetalle.css";

const ContenidoDetalle = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const producto = localStorage.getItem("productoSeleccionado");
    if (producto) {
      setProductoSeleccionado(JSON.parse(producto));
    }
  }, []);

  return (
    <div>
      {productoSeleccionado ? (
        <div className="contenedorDelProductoElegido">
          <img
            src={productoSeleccionado.imagen}
            alt=""
            className="imagenDetalle"
          />
          <div className="infoDelProductoSeleccionado">
            <h2 className="nombreProductoSeleccionado">
              {productoSeleccionado.producto}
            </h2>
            <h4 className="precioProductoSeleccionado">
              ${productoSeleccionado.precio} ARS
            </h4>
            <div className="cajaTalles">
              <h6>Talles</h6>
              <div className="cuadradosTalles">
                <div className="estiloTalle">s</div>
                <div className="estiloTalle">m</div>
                <div className="estiloTalle">xl</div>
                <div className="estiloTalle">xxl</div>
                <div className="estiloTalle">xxxl</div>
              </div>
            </div>
            <div className="cajaBotonComprar">
              <button>Añadir al carrito</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>No se encontraron datos del producto seleccionado.</h1>
      )}
    </div>
  );
};

export default ContenidoDetalle;
