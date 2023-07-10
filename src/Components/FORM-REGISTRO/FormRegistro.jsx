import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreYapellido" className="form-label">
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
          <label htmlFor="nombreDeUsuario" className="form-label">
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
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="contraseña" className="form-label">
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
        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
      </form>
    </>
  );
};

export default FormRegistro;
