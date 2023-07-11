import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./FormRegistro.css";

const FormRegistro = () => {
  const [dataUser, setDataUsers] = useState({
    nombreYapellido: "",
    nombreDeUsuario: "",
    email: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setDataUsers({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (
      dataUser.nombreYapellido &&
      dataUser.nombreDeUsuario &&
      dataUser.email &&
      dataUser.contraseña
    ) {
      try {
        await axios.post("http://localhost:8080/users", dataUser);
        setDataUsers({
          nombreYapellido: "",
          nombreDeUsuario: "",
          email: "",
          contraseña: "",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Te has registrado con exito!",
          showConfirmButton: false,
          timer: 2000,
        });
        // Redirigir al usuario a la página "/tienda"
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Mostrar mensaje de error o realizar alguna acción en caso de campos incompletos
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <>
      <div className="contenedorForm">
        <h2 className="crearCuenta">Crea una cuenta</h2>
        <form onSubmit={handleSubmit} className="formularioRegistrar">
          <div>
            <label
              htmlFor="nombreYapellido"
              className="form-label textosFormularioRegistrar"
            >
              Nombre y apellido
            </label>
            <input
              type="text"
              name="nombreYapellido"
              value={dataUser.nombreYapellido}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label
              htmlFor="nombreDeUsuario"
              className="form-label textosFormularioRegistrar"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              name="nombreDeUsuario"
              value={dataUser.nombreDeUsuario}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="form-label textosFormularioRegistrar"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={dataUser.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label
              htmlFor="contraseña"
              className="form-label textosFormularioRegistrar"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              value={dataUser.contraseña}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="contenedorBotonRegistrar">
            <button type="submit" className="btn botonRegistrar">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRegistro;
