import { Routes, Route } from "react-router-dom";
import CardProduct from "../CARD/CardProduct";
import Administrador from "../ADMINISTRADOR/Administrador";
import Registrarse from "../../Pages/Registrarse";
import ModalIiniciarSesion from "../MODAL INICIAR-SESION/ModalIiniciarSesion";
import Home from "../../Pages/Home";

const Rutas = () => {
  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      {usuarioLogeado !== null ? (
        <>
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/"
            element={<Home />}
          />
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/tienda"
            element={<CardProduct />}
          />
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/addProducto"
            element={<Administrador />}
          />
        </>
      ) : (
        <>
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/"
            element={<Home />}
          />
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/Registrarse"
            element={<Registrarse />}
          />
          <Route
            onClick={<ModalIiniciarSesion />}
            path="/tienda"
            element={<CardProduct />}
          />
        </>
      )}
    </Routes>
  );
};

export default Rutas;
