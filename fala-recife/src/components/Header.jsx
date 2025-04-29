import { Link } from "react-router-dom";
import "./Header.css"; // vamos criar esse CSS também

function Header() {
  return (
    <header className="header">
      <div className="logo">Fala<span>Recife</span></div>
      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/como-funciona">Como Funciona</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Header;
