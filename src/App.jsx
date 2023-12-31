import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/FOOTER/Footer";
import Header from "./Components/HEADER/Header";
import Rutas from "./Components/RUTAS/Rutas";
import ProductosContext from "./Context/ProductosContext";
import UsersContext from "./Context/UsersContext";

function App() {
  return (
    <>
      <UsersContext>
        <ProductosContext>
          <Header />
          <Rutas />
          <Footer />
        </ProductosContext>
      </UsersContext>
    </>
  );
}

export default App;
