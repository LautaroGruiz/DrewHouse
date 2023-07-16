import { useEffect, useState } from "react";
import "./ContenidoCarrito.css";

const ContenidoCarrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const productos = localStorage.getItem("comprarProducto");
    if (productos) {
      setProductosEnCarrito(JSON.parse(productos));
    }
  }, []);

  const eliminarProducto = (id) => {
    const productosEnCarrito =
      JSON.parse(localStorage.getItem("comprarProducto")) || [];

    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === id
    );

    if (index !== -1) {
      if (productosEnCarrito[index].cantidad > 1) {
        productosEnCarrito[index].cantidad -= 1;
      } else {
        productosEnCarrito.splice(index, 1);
      }
    }

    localStorage.setItem("comprarProducto", JSON.stringify(productosEnCarrito));
    setProductosEnCarrito(productosEnCarrito);
  };

  const sumaDeLosPrecios = () => {
    const productosEnCarrito =
      JSON.parse(localStorage.getItem("comprarProducto")) || [];

    let precioTotal = 0;

    for (const producto of productosEnCarrito) {
      const cantidad = producto.cantidad || 1;
      const precioProducto = parseFloat(producto.precio) * cantidad;
      precioTotal += precioProducto;
    }

    return precioTotal.toFixed(3);
  };

  return (
    <div className="contenedorProductosCarrito">
      {productosEnCarrito.length > 0 ? (
        <div className="contenedorGlobalCarrito">
          <div className="cajaProductoEnCarrito">
            <h1>Tu carrito:</h1>
            {productosEnCarrito.map((producto, index) => (
              <div key={index} className="datosProductos">
                <img src={producto.imagen} alt="" />
                <div className="NombrePrecioCarrito">
                  <h4>
                    {producto.producto} - x{producto.cantidad}
                  </h4>
                  <h6>Precio: ${producto.precio}</h6>
                </div>
                <div className="cajaBotonEliminarCarrito">
                  <button onClick={() => eliminarProducto(producto.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cajaTotalCarrito">
            <div className="tituloCompraFinal">
              <h2>Total de tu compra</h2>
            </div>
            <div className="precioFinal">
              ${sumaDeLosPrecios()}
            </div>
            <div className="envioGratis"></div>
          </div>
        </div>
      ) : (
        <h1>No hay productos en el carrito.</h1>
      )}
    </div>
  );
};

export default ContenidoCarrito;
