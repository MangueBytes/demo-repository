import React from 'react';
import './SidebarLayout.css';
import { Link } from "react-router-dom";

const SidebarLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <img src="/logo falarecife.png" alt="Logo Fala Recife" className="logo-img-sidebar" />
         <nav className="menu">
          <Link to="/" className="menu-link">Início</Link>
          <Link to="/nova-denuncia" className="menu-link">Detalhe da Denúncia</Link>
          <Link to="/minhas-denuncias" className="menu-link">Minhas denúncias</Link>
          <Link to="/estatisticas" className="menu-link">Estatísticas</Link>
          <Link to="/perfil" className="menu-link">Perfil</Link>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;