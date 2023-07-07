import { Routes, Route } from "react-router-dom";
import CardProduct from "../CARD/CardProduct";
import Administrador from "../ADMINISTRADOR/Administrador";
import Registrarse from "../../Pages/Registrarse";
import ModalIiniciarSesion from "../MODAL INICIAR-SESION/ModalIiniciarSesion";

const Rutas = () => {
  return (
    <Routes>
      <Route
        onClick={<ModalIiniciarSesion />}
        path="/addProducto"
        element={<Administrador />}
      />
      <Route
        onClick={<ModalIiniciarSesion />}
        path="/tienda"
        element={<CardProduct />}
      />
      <Route
        onClick={<ModalIiniciarSesion />}
        path="/Registrarse"
        element={<Registrarse />}
      />
    </Routes>
  );
};

export default Rutas;
