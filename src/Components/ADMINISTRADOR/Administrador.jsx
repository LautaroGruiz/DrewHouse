import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import SeccionTabla from "../SECCION TABLA/SeccionTabla";
import "./Administrador.css";

const Productos = () => {
  const [productos, setProductos] = useState({
    producto: "",
    precio: "",
    imagen: "",
    stock: "",
  });


  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/productos", productos);
      console.log(response);
      setProductos({
        producto: "",
        precio: "",
        imagen: "",
        stock: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="main">
        <form onSubmit={handleSumbit} className="formularioAddProducto">
          <div className="mb-3 cajaInput">
            <label
              htmlFor="producto"
              className="form-label textosFormularioRegistrar"
            >
              Producto
            </label>
            <input
              type="text"
              className="form-control inputAddProducto"
              value={productos.producto}
              onChange={handleChange}
              name="producto"
              aria-describedby="producto"
            />
          </div>
          <div className="mb-3 cajaInput">
            <label
              htmlFor="precio"
              className="form-label textosFormularioRegistrar"
            >
              Precio
            </label>
            <input
              type="number"
              className="form-control inputAddProducto"
              value={productos.precio}
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
              className="form-control inputAddProducto"
              value={productos.imagen}
              onChange={handleChange}
              name="imagen"
              aria-describedby="imagen"
            />
          </div>
          <div className="mb-3 cajaInput">
            <label
              htmlFor="stock"
              className="form-label textosFormularioRegistrar"
            >
              Stock
            </label>
            <input
              type="text"
              className="form-control inputAddProducto"
              value={productos.stock}
              onChange={handleChange}
              name="stock"
              aria-describedby="stock"
            />
          </div>
          <div className="inputAddProducto cajaBotonAddProducto">
            <Button
              type="submit"
              variant="outline-success"
              className="botonRegistrar botonAddProducto"
            >
              {" "}
              Agregar producto{" "}
            </Button>
          </div>
        </form>
        <SeccionTabla />
      </main>
    </>
  );
};

export default Productos;
