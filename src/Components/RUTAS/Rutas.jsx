import { Routes, Route } from "react-router-dom";
import CardProduct from "../CARD/CardProduct";
import Administrador from "../ADMINISTRADOR/Administrador";
import InicarSesion from "../../Pages/InicarSesion";
import Registrarse from "../../Pages/Registrarse"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/addProducto" element={<Administrador />} />
      <Route path="/tienda" element={<CardProduct />} />
      <Route path="/InicioDeSesion" element={<InicarSesion />} />
      <Route path="/Registrarse" element={<Registrarse />} />
    </Routes>
  );
};

export default Rutas;
