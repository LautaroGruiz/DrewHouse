import "./ContenidoHome.css";

const ContenidoHome = () => {
  return (
    <>
      <div className="bannerWelcome">
        <p>
          welcome to <br /> drew house
        </p>
      </div>
      <div className="contenedorVistaPrevia">
        <div className="fila-uno-home">
          <h6 className="tituloDeProducto">
            mascot oversized hoodie <br /> pacific blue
          </h6>
          <img src="src\Image\HOME-IMAGE\mascotoblue.jpg" />
          <p>$43.700,00 ARS</p>
          <button className="botonVerMas">Ver mas</button>
        </div>
        <div className="fila-uno-home">
          <h6 className="tituloDeProducto">
            mascot corduroy bucket hat
            <br /> royal blue
          </h6>
          <img src="src\Image\HOME-IMAGE\mascotCorduroy.png" />
          <p>$15.600,00 ARS</p>
          <button className="botonVerMas">Ver mas</button>
        </div>
        <div className="fila-uno-home">
          <h6 className="tituloDeProducto">
            sketch mascot crewneck
            <br /> peacock
          </h6>
          <img src="src\Image\HOME-IMAGE\sketchMascot.png" />
          <p>$39.200,00 ARS</p>
          <button className="botonVerMas">Ver mas</button>
        </div>
        <div className="fila-uno-home">
          <h6 className="tituloDeProducto">
            drew house away jersey
            <br /> biscotti
          </h6>
          <img src="src\Image\HOME-IMAGE\drewHouseAway.png" />
          <p>$36.400,00 ARS</p>
          <button className="botonVerMas">Ver mas</button>
        </div>
      </div>
    </>
  );
};

export default ContenidoHome;
