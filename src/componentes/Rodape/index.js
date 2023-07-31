import "./Rodape.css";

const Rodape = () => {
  return (
    <footer
      className="rodape"
      style={{ backgroundImage: "url(/imagens/fundo.png)" }}
    >
      <section>
        <ul className="rodape__lista">
          <li>
            <a href="twitter.com">
              <img src="/imagens/imagens/tw.png" alt="Logo twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src="/imagens/imagens/ig.png" alt="Logo instagrem" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img src="/imagens/imagens/fb.png" alt="Logo facebook" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/imagens/logo.png" alt="Imagem de fundo rodape" />
      </section>
      <section>
        <p>Desenvolvido por Robert Perquim, para curso de react Alura</p>
      </section>
    </footer>
  );
};

export default Rodape;
