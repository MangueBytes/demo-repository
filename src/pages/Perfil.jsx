import SidebarLayout from "../components/SidebarLayout";
import "../styles/Perfil.css";
import { useNavigate } from "react-router-dom";

function Perfil() {
    const navigate = useNavigate();
    const handleLogout = () => {
    navigate("/"); // redireciona para a página inicial
};

  return (
    <SidebarLayout>
      <div className="perfil-container">
        <div className="perfil-card">
            <img
            src="src\assets\avatar.png" 
            alt="Avatar do usuário"
            className="perfil-avatar"
            />
            <h2>João da Silva</h2>
            <p><strong>Email:</strong> joao.silva@email.com</p>
            <p><strong>Bairro:</strong> Boa Viagem</p>
            <p><strong>Tipo de usuário:</strong> Morador</p>

            <div className="perfil-actions">
            <button className="btn-edit">Editar Perfil</button>
            <button className="btn-logout" onClick={handleLogout}>Sair</button>

            </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

export default Perfil;
