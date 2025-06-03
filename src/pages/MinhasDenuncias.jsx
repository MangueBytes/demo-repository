import React, { useState, useEffect } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import '../styles/MinhasDenuncias.css'; // Vamos criar este CSS

function MinhasDenuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulação de uma chamada de API para buscar as denúncias do usuário
    // Em um cenário real, você faria um fetch() para seu backend aqui.
    const fetchDenuncias = async () => {
      try {
        setLoading(true);
        // Dados mockados para demonstração
        const mockDenuncias = [
          {
            id: '1',
            titulo: 'Buraco na Rua da Aurora',
            descricao: 'Grande buraco causando problemas no trânsito e risco de acidentes.',
            categoria: 'Buraco',
            status: 'Pendente',
            data: '2024-05-20',
            local: 'Rua da Aurora, Boa Vista, Recife'
          },
          {
            id: '2',
            titulo: 'Acúmulo de lixo na Avenida Boa Viagem',
            descricao: 'Lixo acumulado próximo à praia, atraindo insetos e roedores.',
            categoria: 'Lixo',
            status: 'Em Análise',
            data: '2024-05-18',
            local: 'Av. Boa Viagem, Pina, Recife'
          },
          {
            id: '3',
            titulo: 'Poste de luz queimado na Imbiribeira',
            descricao: 'Rua escura à noite, aumentando a insegurança.',
            categoria: 'Outro',
            status: 'Resolvido',
            data: '2024-05-15',
            local: 'Rua Padre Carapuceiro, Imbiribeira, Recife'
          },
          {
            id: '4',
            titulo: 'Calçada danificada na Caxangá',
            descricao: 'Calçada com pedras soltas, dificultando a passagem de pedestres, especialmente idosos.',
            categoria: 'Outro',
            status: 'Pendente',
            data: '2024-05-10',
            local: 'Av. Caxangá, Caxangá, Recife'
          }
        ];
        // Simular um atraso na rede
        await new Promise(resolve => setTimeout(resolve, 500));
        setDenuncias(mockDenuncias);
      } catch (err) {
        setError('Falha ao carregar suas denúncias. Tente novamente mais tarde.');
        console.error("Erro ao buscar denúncias:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDenuncias();
  }, []);

  if (loading) {
    return (
      <SidebarLayout>
        <div className="minhas-denuncias-container">
          <h2>Minhas Denúncias</h2>
          <p>Carregando denúncias...</p>
        </div>
      </SidebarLayout>
    );
  }

  if (error) {
    return (
      <SidebarLayout>
        <div className="minhas-denuncias-container">
          <h2>Minhas Denúncias</h2>
          <p className="error-message">{error}</p>
        </div>
      </SidebarLayout>
    );
  }

  return (
    <SidebarLayout>
      <div className="minhas-denuncias-container">
        <h2>Minhas Denúncias</h2>
        {denuncias.length === 0 ? (
          <p>Você ainda não registrou nenhuma denúncia.</p>
        ) : (
          <div className="denuncias-list">
            {denuncias.map((denuncia) => (
              <div key={denuncia.id} className={`denuncia-card status-${denuncia.status.toLowerCase().replace(/\s/g, '-')}`}>
                <h3>{denuncia.titulo}</h3>
                <p><strong>Descrição:</strong> {denuncia.descricao}</p>
                <p><strong>Categoria:</strong> {denuncia.categoria}</p>
                <p><strong>Local:</strong> {denuncia.local}</p>
                <p><strong>Status:</strong> <span className="status-badge">{denuncia.status}</span></p>
                <p><strong>Data:</strong> {denuncia.data}</p>
                {/* Aqui você poderia adicionar um Link para a página de Detalhe da Denúncia, se necessário */}
                {/* <Link to={`/detalhe-denuncia/${denuncia.id}`} className="ver-detalhes-btn">Ver Detalhes</Link> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}

export default MinhasDenuncias;