import { useNavigate } from "react-router-dom";
import { Home } from "./HomePageCSS";

function HomePage() {

  const navigate = useNavigate();

  const Sossego = require("../../assets/Sossego.png");

  return (
    <Home>
      <img src={Sossego} alt="Imagem Logotipo da Empresa Sossego." />
      <h1>
        O corretor cada vez mais feliz e sossegado é nossa maior fonte de
        motivação. Vivemos na era da ultra conveniência, com os consumidores
        cada vez mais exigentes e digitais. Nossas soluções são pensadas para
        ajudar o corretor a operar sua empresa com menos estresse e mais lucro.
      </h1>
      <p>
        Nossos clientes confiam em nós e trabalhamos incessantemente para
        retribuir cada dia mais, não perca mais tempo, faça já seu cadastro!
      </p>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className="btnInit"
      >
        CADASTRAR
      </button>
    </Home>
  );
}

export default HomePage;
