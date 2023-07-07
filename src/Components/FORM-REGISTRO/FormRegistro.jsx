import { useState } from "react";
import axios from "axios";

const FormRegistro = () => {
  const [dataUser, setDataUsers] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setDataUsers({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/users", dataUser);
      setDataUsers({
        nombre: "",
        apellido: "",
        email: "",
        contraseña: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            value={dataUser.nombre}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            value={dataUser.apellido}
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
