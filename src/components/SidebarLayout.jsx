import React from 'react';
import './SidebarLayout.css';
import { Link } from "react-router-dom";

const SidebarLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <img src="/logo falarecife.png" alt="Logo Fala Recife" className="logo-img-sidebar" />
        <nav className="menu">
          <a href="/" className="menu-link">Início</a>
          <a href="/registrar" className="menu-link">Registrar denúncia</a>
          <a href="/minhas-denuncias" className="menu-link">Minhas denúncias</a>
          <a href="/estatisticas" className="menu-link">Estatísticas</a>
          <a href="/Perfil" className="menu-link">Perfil</a>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;