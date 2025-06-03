import React, { useState, useEffect } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import '../styles/Estatisticas.css'; // Vamos criar este CSS

const COLORS = ['#FFBB28', '#00C49F', '#FF8042', '#0088FE', '#AF19FF']; // Cores para os gráficos

function Estatisticas() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulação de uma chamada de API para buscar dados de estatísticas
    // Em um cenário real, seu backend agregaria esses dados
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Dados mockados para demonstração
        const mockStats = {
          totalDenuncias: 125,
          denunciasPorCategoria: [
            { name: 'Lixo', value: 50 },
            { name: 'Buraco', value: 40 },
            { name: 'Iluminação Pública', value: 20 },
            { name: 'Vandalismo', value: 15 },
          ],
          denunciasPorStatus: [
            { name: 'Pendente', value: 60 },
            { name: 'Em Análise', value: 35 },
            { name: 'Resolvido', value: 30 },
          ],
          denunciasPorMes: [
            { name: 'Jan', Denúncias: 10 },
            { name: 'Fev', Denúncias: 15 },
            { name: 'Mar', Denúncias: 25 },
            { name: 'Abr', Denúncias: 30 },
            { name: 'Mai', Denúncias: 45 },
          ]
        };
        // Simular um atraso na rede
        await new Promise(resolve => setTimeout(resolve, 500));
        setStats(mockStats);
      } catch (err) {
        setError('Falha ao carregar as estatísticas. Tente novamente mais tarde.');
        console.error("Erro ao buscar estatísticas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <SidebarLayout>
        <div className="estatisticas-container">
          <h2>Estatísticas Gerais</h2>
          <p>Carregando estatísticas...</p>
        </div>
      </SidebarLayout>
    );
  }

  if (error) {
    return (
      <SidebarLayout>
        <div className="estatisticas-container">
          <h2>Estatísticas Gerais</h2>
          <p className="error-message">{error}</p>
        </div>
      </SidebarLayout>
    );
  }

  return (
    <SidebarLayout>
      <div className="estatisticas-container">
        <h2>Estatísticas Gerais do FalaRecife</h2>

        <div className="stats-cards">
          <div className="stat-card">
            <h3>Total de Denúncias</h3>
            <p className="stat-value">{stats.totalDenuncias}</p>
          </div>
          {/* Adicione mais cartões de estatísticas se desejar */}
          <div className="stat-card">
            <h3>Denúncias Resolvidas</h3>
            <p className="stat-value">{stats.denunciasPorStatus.find(s => s.name === 'Resolvido')?.value || 0}</p>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-box">
            <h3>Denúncias por Categoria</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={stats.denunciasPorCategoria}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Número de Denúncias" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h3>Denúncias por Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.denunciasPorStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {stats.denunciasPorStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box full-width">
            <h3>Evolução das Denúncias (Mensal)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={stats.denunciasPorMes}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Denúncias" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

export default Estatisticas;