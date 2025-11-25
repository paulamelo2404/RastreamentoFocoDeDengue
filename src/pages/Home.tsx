// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  // Dados mock para estatísticas - agora com escopo nacional
  const estatisticasMock = {
    focosMapeados: "2.4K",
    municipiosAtivos: 127,
    agentesCadastrados: "1.2K",
    denunciasRecebidas: "8.7K"
  };

  const prevencoes = [
    {
      icone: "💧",
      titulo: "Elimine Água Parada",
      descricao: "Vasos, pneus e garrafas podem ser criadouros do mosquito."
    },
    {
      icone: "🛢️",
      titulo: "Tampe Reservatórios", 
      descricao: "Caixas d'água, tonéis e barris devem estar bem fechados."
    },
    {
      icone: "🧹",
      titulo: "Mantenha Limpo",
      descricao: "Limpe calhas e lajes regularmente para evitar acúmulo."
    },
    {
      icone: "🚮",
      titulo: "Descarte Correto",
      descricao: "Destine o lixo adequadamente e evite recipientes abertos."
    }
  ];

  const dadosDengue = [
    { numero: "390K+", descricao: "Casos registrados no Brasil em 2024" },
    { numero: "150+", descricao: "Óbitos confirmados este ano" },
    { numero: "80%", descricao: "Casos concentrados em SP, MG e PR" }
  ];

  const estadosAtuacao = [
    "São Paulo", "Minas Gerais", "Paraná", "Rio de Janeiro", "Bahia",
    "Santa Catarina", "Goiás", "Ceará", "Pernambuco", "Rio Grande do Sul"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header com Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="https://i.imgur.com/hBsZGRA.png" 
              alt="Em Foco - Combate à Dengue"
              className="h-16 sm:h-20"
            />
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0593A2]"></h1>
              <p className="text-lg text-gray-600">Sistema Nacional de Combate à Dengue</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-blue-100 mb-6">
            <div className="w-3 h-3 bg-[#E50700] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">Monitoramento Ativo em Todo Brasil</span>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plataforma integrada de mapeamento e combate ao <strong>Aedes aegypti</strong> em 
            território nacional. Sua contribuição salva vidas.
          </p>
        </div>

        {/* Cartões de Impacto Nacional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Focos Mapeados</p>
                <p className="text-3xl font-bold text-[#0593A2]">{estatisticasMock.focosMapeados}</p>
              </div>
              <div className="w-8 h-8 bg-[#0593A2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Em todo território nacional
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Municípios Ativos</p>
                <p className="text-3xl font-bold text-[#0593A2]">{estatisticasMock.municipiosAtivos}</p>
              </div>
              <div className="w-8 h-8 bg-[#0593A2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Utilizando a plataforma
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Agentes Cadastrados</p>
                <p className="text-3xl font-bold text-[#0593A2]">{estatisticasMock.agentesCadastrados}</p>
              </div>
              <div className="w-8 h-8 bg-[#0593A2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Trabalhando pelo Brasil
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Denúncias Recebidas</p>
                <p className="text-3xl font-bold text-[#0593A2]">{estatisticasMock.denunciasRecebidas}</p>
              </div>
              <div className="w-8 h-8 bg-[#0593A2] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Pela população
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Seção de Prevenção */}
          <div>
            <h2 className="text-3xl font-bold text-[#0593A2] mb-8 border-b pb-2">
              Medidas de Prevenção
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevencoes.map((prevencao, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-md border border-blue-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#0593A2] rounded-lg flex items-center justify-center text-white font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{prevencao.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{prevencao.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dados Nacionais e Estados */}
          <div>
            <h2 className="text-3xl font-bold text-[#E50700] mb-8 border-b pb-2">
              Situação Nacional
            </h2>
            
            <div className="space-y-4 mb-6">
              {dadosDengue.map((dado, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-[#0593A2] to-[#057A93] rounded-xl p-5 text-white shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">{dado.numero}</div>
                    <div className="text-sm opacity-90 flex-1">{dado.descricao}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Estados com Atuação */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-blue-50">
              <h3 className="font-semibold text-[#0593A2] mb-3">Estados com Monitoramento Ativo</h3>
              <div className="flex flex-wrap gap-2">
                {estadosAtuacao.map((estado, index) => (
                  <span 
                    key={index}
                    className="bg-[#0593A2] text-white text-xs px-3 py-1 rounded-full"
                  >
                    {estado}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Principal */}
        <div className="bg-gradient-to-r from-[#0593A2] to-[#E50700] rounded-2xl p-8 text-white text-center mb-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ajude a Combater a Dengue</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Cada denúncia pode prevenir dezenas de casos. Reporte focos do mosquito 
            e proteja sua comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E50700] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Reportar Foco Agora
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Ver Mapa Nacional
            </button>
          </div>
        </div>

        {/* Mapa Nacional Resumido */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#0593A2]">
              Cobertura Nacional
            </h2>
            <span className="text-sm bg-[#E50700] text-white px-4 py-2 rounded-full font-semibold">
              Em Expansão Contínua
            </span>
          </div>
          
          <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl border-2 border-dashed border-[#0593A2] flex flex-col items-center justify-center">
            <div className="text-4xl mb-4 text-[#0593A2] font-bold">BR</div>
            <p className="text-[#0593A2] font-semibold text-center text-lg">
              Mapeamento Ativo em {estatisticasMock.municipiosAtivos} Municípios
            </p>
            <p className="text-gray-600 text-sm text-center mt-2 max-w-md">
              Atuamos em todos os estados brasileiros identificando e combatendo 
              focos do Aedes aegypti
            </p>
          </div>
        </div>

        {/* Footer Informativo */}
        <div className="text-center py-8 border-t border-blue-200">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="https://i.imgur.com/hBsZGRA.png" 
              alt="Em Foco"
              className="h-8"
            />
            <span className="text-xl font-bold text-[#0593A2]">Em Foco</span>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Emergências de Saúde?</strong> Entre em contato com a Vigilância Sanitária do seu município
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>Sistema 24/7</span>
            <span>Cobertura Nacional</span>
            <span>Totalmente Gratuito</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;