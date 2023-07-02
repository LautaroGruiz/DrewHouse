import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/HEADER/Header";
import Rutas from "./Components/RUTAS/Rutas";
import ProductosContext from "./Context/ProductosContext";

function App() {
  return (
    <>
      <ProductosContext>
        <Header />
        <Rutas />
      </ProductosContext>
    </>
  );
}

export default App;
