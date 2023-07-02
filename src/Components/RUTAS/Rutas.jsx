import { Routes, Route } from "react-router-dom";
import CardProduct from "../CARD/CardProduct";
import Administrador from "../ADMINISTRADOR/Administrador";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/addProducto" element={<Administrador />} />
            <Route path="/tienda" element={<CardProduct/>} />
        </Routes>
      )
};

export default Rutas;
