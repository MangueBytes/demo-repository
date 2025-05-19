import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import iconFace from "../assets/icone facebook.png";
import iconGoogle from "../assets/icone google.png";

function Home() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/Perfil"); // Redireciona para /painel
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-left">
          <h1>Monitorando problemas<br/>Transformando comunidades</h1>
          <div className="descricao-container">
            <p className="descricao-home">
              FalaRecife é um espaço que permite que os moradores registrem denúncias e sugestões para melhorias na cidade.
              <img src="src\assets\icone-comunidade.png" alt="Ícone Comunidade" className="icone-descricao" />
            </p>
          </div>
          

          <Link to="/nova-denuncia">
            <button className="btn-yellow">Registrar uma Denúncia</button>
          </Link>
        </div>

        <div className="home-right">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit" className="btn-darkblue">Entrar</button>
            </form>
            <div className="social-login">
              <button className="btn-google">
              <img src={iconGoogle} alt="Google" className="btn-icon" />Entrar com Google</button>
              <button className="btn-facebook"> <img src={iconFace} alt="Face" className="btn-icon" />Entrar com Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
