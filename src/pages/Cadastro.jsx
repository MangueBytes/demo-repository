import Header from "../components/Header";
import "../styles/Cadastro.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <>
      <Header />
      <div className="cadastro-container">
        <div className="form-box">
          <h2>Cadastre-se</h2>
          <form>
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Bairro" required />
            <select required>
              <option value="">Tipo de usuário</option>
              <option value="morador">Morador</option>
              <option value="comerciante">Comerciante</option>
              <option value="estudante">Estudante</option>
            </select>
            <input type="password" placeholder="Senha" required />
            <button type="submit" className="btn-darkblue">Cadastrar</button>
          </form>
          <p>Já tem conta? <Link to="/">Fazer login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Cadastro;