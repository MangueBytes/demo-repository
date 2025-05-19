import Header from "../components/Header";
import "../styles/sobre.css";
import { useNavigate } from "react-router-dom";

export function Sobre() {
  return (
    <>
      <Header />
    <div className="sobre-container">
      <h1>Sobre o FalaRecife</h1>
      <p>
        O <strong>FalaRecife</strong> é uma plataforma digital desenvolvida para fortalecer o diálogo entre moradores e associações de bairro da cidade do Recife. A iniciativa surgiu a partir da necessidade de tornar mais eficaz a comunicação comunitária, promovendo engajamento cidadão, ações colaborativas e melhorias urbanas.
      </p>
      <p>
        Nosso objetivo é transformar bairros em espaços mais organizados, seguros e acolhedores, por meio da participação ativa da população na identificação de problemas e proposição de soluções. Acreditamos que ouvir e empoderar quem vive o cotidiano da cidade é o primeiro passo para criar um Recife mais justo e sustentável.
      </p>
      <p>
        A plataforma foi pensada para ser acessível, inclusiva e adaptável às realidades de diferentes perfis de usuários, como comerciantes locais, estudantes, trabalhadores e moradores em geral. Através do FalaRecife, é possível denunciar problemas urbanos, sugerir melhorias, apoiar propostas e acompanhar o andamento das ações com transparência e agilidade.
      </p>

      {/* Container dos integrantes */}
      <section className="integrantes-container">
        <h2>MangueBytes</h2>
        <div className="integrantes-lista">
          <div className="integrante-card">
            <img
            src="src\assets\janderson.png" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
            <h3>Janderson Ferreira</h3>
          </div>
          <div className="integrante-card">
            <img
            src="src\assets\eu.jpeg" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
            <h3>Pedro Rennil</h3>
          </div>
          <div className="integrante-card">
            <img
            src="src\assets\rhaldney.png" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
            <h3>Rhaldney Robert</h3>
          </div>
        </div>
      </section>

      {/* Container das instituições */}
      <section className="instituicoes-container">
        <h2>Instituições Parceiras</h2>
        <div className="instituicoes-logos">
          <img
            src="src\assets\logo cesar.png" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
          <img
            src="src\assets\logo porto.png" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
          <img
            src="src\assets\logo accenture.png" 
            alt="Logo Accenture"
            className="perfil-avatar"
            />
        </div>
      </section>
    </div>
    </>
  );
}
