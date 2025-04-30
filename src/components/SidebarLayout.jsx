import React from 'react';
import './SidebarLayout.css';

const SidebarLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h1 className="logo">Fala<span>Recife</span></h1>
        <nav className="menu">
          <a href="/registrar" className="menu-link">Registrar denúncia</a>
          <a href="/minhas-denuncias" className="menu-link">Minhas denúncias</a>
          <a href="/estatisticas" className="menu-link">Estatísticas</a>
          <a href="/perfil" className="menu-link">Perfil</a>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;