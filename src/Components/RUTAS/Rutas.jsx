import { Routes, Route } from "react-router-dom";
import CardProduct from "../CARD/CardProduct";
import Administrador from "../ADMINISTRADOR/Administrador";
import Registrarse from "../../Pages/Registrarse";
import ModalIiniciarSesion from "../MODAL INICIAR-SESION/ModalIniciarSesion";
import Home from "../../Pages/Home";
import ContenidoDetalle from "../CONTENIDO DETALLE/ContenidoDetalle";
import Carrito from "../../Pages/Carrito";

const Rutas = () => {
  const usuarioLogeado = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      {usuarioLogeado !== null ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<CardProduct />} />
          <Route path="/addProducto" element={<Administrador />} />
          <Route path="/detalle" element={<ContenidoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />
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
          <Route path="/detalle" element={<ContenidoDetalle />} />
        </>
      )}
    </Routes>
  );
};

export default Rutas;
