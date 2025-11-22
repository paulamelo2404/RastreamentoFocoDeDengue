// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  // Dados mock para estatísticas - serão substituídos pelos serviços reais depois
  const estatisticasMock = {
    focosAtivos: 12,
    casosSuspeitos: 8,
    areasMonitoradas: 5,
    agentesAtivos: 3
  };

  const alertasRecentes = [
    { tipo: 'alto', local: 'Rua Maria Cândida', descricao: 'Múltiplos focos identificados' },
    { tipo: 'medio', local: 'Vila Natal', descricao: 'Caso suspeito em investigação' },
    { tipo: 'baixo', local: 'Jardim São Jorge', descricao: 'Prevenção em andamento' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCECF7] to-[#F5D8EC] py-6 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#5D3C77] mb-4">
            🦟 DengueTracker
          </h1>
          <p className="text-xl text-[#7A5C93] max-w-2xl mx-auto">
            Sistema de monitoramento e combate à dengue no Jardim Ângela
          </p>
        </div>

        {/* Cartões de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Focos Ativos */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Focos Ativos</p>
                <p className="text-3xl font-bold text-red-600">{estatisticasMock.focosAtivos}</p>
              </div>
              <div className="text-3xl">🔴</div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Necessitam de ação imediata
            </div>
          </div>

          {/* Casos Suspeitos */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Casos Suspeitos</p>
                <p className="text-3xl font-bold text-yellow-600">{estatisticasMock.casosSuspeitos}</p>
              </div>
              <div className="text-3xl">🟡</div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Em monitoramento
            </div>
          </div>

          {/* Áreas Monitoradas */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Áreas Monitoradas</p>
                <p className="text-3xl font-bold text-blue-600">{estatisticasMock.areasMonitoradas}</p>
              </div>
              <div className="text-3xl">🗺️</div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Setores do Jardim Ângela
            </div>
          </div>

          {/* Agentes Ativos */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Agentes Ativos</p>
                <p className="text-3xl font-bold text-green-600">{estatisticasMock.agentesAtivos}</p>
              </div>
              <div className="text-3xl">👨‍⚕️</div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Em campo agora
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa - Área Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#FCECF7]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#5D3C77]">
                  🗺️ Mapa de Focos - Jardim Ângela
                </h2>
                <span className="text-sm bg-[#FCECF7] text-[#5D3C77] px-3 py-1 rounded-full">
                  Tempo Real
                </span>
              </div>
              
              {/* Área do Mapa */}
              <div className="w-full h-96 bg-gradient-to-br from-[#FCECF7] to-[#F5D8EC] flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#5D3C77]">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-[#5D3C77] font-semibold text-center">
                  Mapa Interativo em Desenvolvimento
                </p>
                <p className="text-[#7A5C93] text-sm text-center mt-2">
                  Visualização geográfica dos focos ativos e casos suspeitos
                </p>
              </div>

              {/* Legenda do Mapa */}
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Foco Ativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Caso Suspeito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Área Monitorada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Alertas e Ações Rápidas */}
          <div className="space-y-6">
            {/* Alertas Recentes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#FCECF7]">
              <h3 className="text-xl font-bold text-[#5D3C77] mb-4 flex items-center gap-2">
                ⚡ Alertas Recentes
              </h3>
              
              <div className="space-y-3">
                {alertasRecentes.map((alerta, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${
                      alerta.tipo === 'alto' ? 'border-red-500 bg-red-50' :
                      alerta.tipo === 'medio' ? 'border-yellow-500 bg-yellow-50' :
                      'border-green-500 bg-green-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">{alerta.local}</p>
                        <p className="text-sm text-gray-600">{alerta.descricao}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        alerta.tipo === 'alto' ? 'bg-red-100 text-red-800' :
                        alerta.tipo === 'medio' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {alerta.tipo === 'alto' ? 'Alto' : alerta.tipo === 'medio' ? 'Médio' : 'Baixo'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#FCECF7]">
              <h3 className="text-xl font-bold text-[#5D3C77] mb-4 flex items-center gap-2">
                🚀 Ações Rápidas
              </h3>
              
              <div className="space-y-3">
                <button className="w-full bg-[#5D3C77] hover:bg-[#4A2F5F] text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  📍 Registrar Novo Foco
                </button>
                <button className="w-full bg-[#FCECF7] hover:bg-[#F5D8EC] text-[#5D3C77] py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#5D3C77]">
                  📊 Gerar Relatório
                </button>
                <button className="w-full bg-[#FCECF7] hover:bg-[#F5D8EC] text-[#5D3C77] py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#5D3C77]">
                  👥 Ver Agentes
                </button>
              </div>
            </div>

            {/* Dica de Prevenção */}
            <div className="bg-gradient-to-r from-[#5D3C77] to-[#7A5C93] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                💡 Dica de Prevenção
              </h3>
              <p className="text-sm opacity-90">
                Elimine recipientes que acumulam água parada. 
                Tampe caixas d'água e limpe calhas regularmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;