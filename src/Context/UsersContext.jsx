import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ContextoDeUsuarios = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user")
    window.location.href= "/"
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ContextoDeUsuarios.Provider value={{ users, setUsers, logOut }}>
      {children}
    </ContextoDeUsuarios.Provider>
  );
};

export default UsersContext;
