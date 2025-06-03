import Header from "../components/Header";
import "../styles/como-funciona.css";

export function ComoFunciona() {
  const etapas = [
    {
      titulo: "1. Descubra a Plataforma",
      descricao:
        "Você conhece o FalaRecife por meio de campanhas no bairro ou nas redes sociais. Percebe que finalmente há um espaço para fazer sua voz ser ouvida."
    },
    {
      titulo: "2. Crie seu Perfil",
      descricao:
        "Cadastre-se com nome, e-mail e bairro de residência. Escolha seu tipo de usuário (morador, comerciante, estudante etc.) e pronto, você já pode começar a interagir!"
    },
    {
      titulo: "3. Registre Problemas ou Sugestões",
      descricao:
        "Relate problemas urbanos (como buracos nas ruas ou falta de iluminação) ou proponha melhorias (como revitalização de praças). Você pode incluir descrições, fotos e localização."
    },
    {
      titulo: "4. Engaje com a Comunidade",
      descricao:
        "Comente, apoie e compartilhe publicações de outros moradores. Use o sistema de curtidas, comentários e abaixo-assinados virtuais para mostrar apoio às iniciativas."
    },
    {
      titulo: "5. Acompanhe Soluções",
      descricao:
        "Receba notificações sobre o andamento das denúncias e propostas. Veja quais ações estão sendo resolvidas, quais estão em andamento e quais aguardam resposta."
    },
    {
      titulo: "6. Continue Transformando",
      descricao:
        "Volte sempre à plataforma para participar de novas discussões, promover ideias e fortalecer o senso de comunidade no seu bairro."
    }
  ];

  const funcionalidades = [
    "Cadastro de usuários e denúncias",
    "Acompanhamento de status",
    "Feed personalizado por bairro",
    "Mapa interativo",
    "Ranking de engajamento",
    "Notificações em tempo real",
    "Integração com órgãos públicos",
    "Acessibilidade e segurança"
  ];

  return (
    <>
      <Header />

      <main className="como-funciona-container">
        <h1 className="titulo-principal">Como Funciona o FalaRecife?</h1>

        <section className="etapas-section">
          {etapas.map((etapa, index) => (
            <div key={index} className="etapa-card">
              <h2 className="etapa-titulo">{etapa.titulo}</h2>
              <p className="etapa-descricao">{etapa.descricao}</p>
            </div>
          ))}
        </section>

        <section className="funcionalidades-section">
          <h2 className="funcionalidades-titulo">Funcionalidades principais:</h2>
          <ul className="funcionalidades-lista">
            {funcionalidades.map((item, index) => (
              <li key={index} className="funcionalidade-item">{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default ComoFunciona;