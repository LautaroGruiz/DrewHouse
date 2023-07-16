import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ContenidoDetalle.css";

const ContenidoDetalle = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const producto = localStorage.getItem("productoSeleccionado");
    if (producto) {
      setProductoSeleccionado(JSON.parse(producto));
    }
  }, []);

  const enviarACarrito = () => {
    const productosEnCarrito = localStorage.getItem("comprarProducto");
    let nuevosProductos = [];

    if (productosEnCarrito) {
      nuevosProductos = JSON.parse(productosEnCarrito);

      // Verificar si el producto ya existe en el carrito
      const productoExistente = nuevosProductos.find(
        (producto) => producto.id === productoSeleccionado.id
      );

      if (productoExistente) {
        productoExistente.cantidad += 1; // Actualizar la cantidad del producto existente
      } else {
        nuevosProductos.push({ ...productoSeleccionado, cantidad: 1 }); // Agregar una nueva instancia del producto al carrito
      }
    } else {
      // Agregar el primer producto al carrito
      nuevosProductos.push({ ...productoSeleccionado, cantidad: 1 });
    }
    localStorage.setItem("comprarProducto", JSON.stringify(nuevosProductos));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  };

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
              <button onClick={enviarACarrito}>Añadir al carrito</button>
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
