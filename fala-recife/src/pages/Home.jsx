import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-left">
          <h1>Monitorando problemas<br/>Transformando comunidades</h1>
          <p>FalaRecife é um espaço que permite que os moradores registrem denúncias e sugestões para melhorias na cidade.</p>
          <Link to="/nova-denuncia">
            <button className="btn-yellow">Registrar uma Denúncia</button>
          </Link>
        </div>

        <div className="home-right">
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit" className="btn-darkblue">Entrar</button>
            </form>
            <div className="social-login">
              <button className="btn-google">Entrar com Google</button>
              <button className="btn-facebook">Entrar com Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
