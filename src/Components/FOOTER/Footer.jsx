import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contenedorSubscribir">
        <div className="contenedorComunidad">
          <h4>Únete a la comunidad</h4>
          <div className="inputBoton">
            <input type="email" name="subscriptor" placeholder="email" />
            <button type="submit">subscribirse</button>
          </div>
        </div>
        <div className="ojosDrew">
          <div className="dibujoOjo"></div>
          <div className="dibujoOjo"></div>
        </div>
      </div>
      <div className="contenedorRedes">
        <div className="contenedorAyuda">
          <div className="help">
            <h5>ayuda</h5>
            <ul>
              <li>
                <a>guía de tela</a>
              </li>
              <li>
                <a>política de envío y devolución</a>
              </li>
              <li>
                <a>politica de pedidos</a>
              </li>
              <li>
                <a>contáctenos</a>
              </li>
              <li>
                <a>sobre nosotros</a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h5 className="blah">blah blah blah</h5>
            <ul>
              <li>
                <a>términos de servicio</a>
              </li>
              <li>
                <a>política de privacidad</a>
              </li>
              <li>
                <a>No vender mi información personal</a>
              </li>
              <li>
                <a>© 2023, casa dibujada</a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h5>social</h5>
            <ul>
              <li>
                <a>instagram</a>
              </li>
              <li>
                <a>twitter</a>
              </li>
              <li>
                <a>newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contenedorStore">
            <img src="src\Image\FOOTER-IMAGE\appStore.png" alt="" />
            <img src="src\Image\FOOTER-IMAGE\googlePlay.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
