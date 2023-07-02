import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import SeccionTabla from "../SECCION TABLA/SeccionTabla";
import "./Administrador.css";

const Productos = () => {
  const [productos, setProductos] = useState({
    producto: "",
    precio: "",
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
        stock: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="main">
        <form onSubmit={handleSumbit}>
          <div className="mb-3">
            <label htmlFor="producto" className="form-label">
              Producto
            </label>
            <input
              type="text"
              className="form-control"
              value={productos.producto}
              onChange={handleChange}
              name="producto"
              aria-describedby="producto"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              value={productos.precio}
              onChange={handleChange}
              name="precio"
              aria-describedby="precio"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="text"
              className="form-control"
              value={productos.stock}
              onChange={handleChange}
              name="stock"
              aria-describedby="stock"
            />
          </div>

          <Button type="submit" variant="outline-success">
            {" "}
            Agregar Producto{" "}
          </Button>
        </form>
        <SeccionTabla />
      </main>
    </>
  );
};

export default Productos;
