import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ContextoDeProductos = createContext();

// eslint-disable-next-line react/prop-types
const ProductosContext = ({ children }) => {
  const [productos, setProductos] = useState();

  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/productos");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/productos/${id}`);
      const updatedProducts = productos.filter(
        (producto) => producto.id !== id
      );
      setProductos(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ContextoDeProductos.Provider
      value={{ productos, setProductos, deleteProduct }}
    >
      {children}
    </ContextoDeProductos.Provider>
  );
};

export default ProductosContext;
