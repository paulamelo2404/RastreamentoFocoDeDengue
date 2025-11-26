// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/hBsZGRA.png" 
                alt="Em Foco - Combate à Dengue"
                className="h-8 sm:h-10"
              />
              <span className="text-xl font-bold text-[#0593A2] hidden sm:block">Em Foco</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#prevencao" className="text-gray-600 hover:text-[#0593A2] transition-colors font-medium">Prevenção</a>
              <a href="#dados" className="text-gray-600 hover:text-[#0593A2] transition-colors font-medium">Dados</a>
              <a href="#cobertura" className="text-gray-600 hover:text-[#0593A2] transition-colors font-medium">Cobertura</a>
            </div>

            <Link 
              to="/municipios" 
              className="bg-gradient-to-r from-[#0593A2] to-[#057A93] text-white px-6 py-2 rounded-full font-semibold hover:from-[#057A93] hover:to-[#045a6b] transition-all shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              Acessar Plataforma
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-blue-100 mb-8">
              <div className="w-3 h-3 bg-[#E50700] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Monitoramento Ativo em Todo Brasil</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Combate à
              <span className="bg-gradient-to-r from-[#0593A2] to-[#E50700] bg-clip-text text-transparent"> Dengue</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Plataforma nacional integrada de mapeamento e combate ao <strong>Aedes aegypti</strong>. 
              Tecnologia a serviço da saúde pública brasileira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/municipios"
                className="bg-gradient-to-r from-[#0593A2] to-[#057A93] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#057A93] hover:to-[#045a6b] transition-all shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                🗺️ Explorar Mapa Nacional
              </Link>
              <button className="border-2 border-[#0593A2] text-[#0593A2] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0593A2] hover:text-white transition-all">
                📚 Guia de Prevenção
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-[#0593A2]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-[#E50700]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/60 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0593A2] mb-2">{estatisticasMock.focosMapeados}</div>
              <div className="text-gray-600 font-medium">Focos Mapeados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0593A2] mb-2">{estatisticasMock.municipiosAtivos}</div>
              <div className="text-gray-600 font-medium">Municípios Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0593A2] mb-2">{estatisticasMock.agentesCadastrados}</div>
              <div className="text-gray-600 font-medium">Agentes Cadastrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0593A2] mb-2">{estatisticasMock.denunciasRecebidas}</div>
              <div className="text-gray-600 font-medium">Denúncias Recebidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention Section */}
      <div id="prevencao" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medidas de
              <span className="bg-gradient-to-r from-[#0593A2] to-[#057A93] bg-clip-text text-transparent"> Prevenção</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ações simples que fazem a diferença no combate ao mosquito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prevencoes.map((prevencao, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#0593A2] to-[#057A93] rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
                  {prevencao.icone}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{prevencao.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{prevencao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Section */}
      <div id="dados" className="bg-gradient-to-r from-[#0593A2] to-[#057A93] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Situação
                <span className="block">Nacional</span>
              </h2>
              
              <div className="space-y-4">
                {dadosDengue.map((dado, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold">{dado.numero}</div>
                      <div className="text-sm opacity-90 flex-1">{dado.descricao}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Estados com Monitoramento Ativo</h3>
              <div className="flex flex-wrap gap-3">
                {estadosAtuacao.map((estado, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-white/30"
                  >
                    {estado}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Section */}
      <div id="cobertura" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Cobertura
                  <span className="bg-gradient-to-r from-[#0593A2] to-[#E50700] bg-clip-text text-transparent"> Nacional</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Atuamos em todos os estados brasileiros identificando e combatendo focos
                </p>
              </div>
              <span className="bg-[#E50700] text-white px-6 py-3 rounded-full font-semibold text-sm">
                Em Expansão Contínua
              </span>
            </div>
            
            <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl border-2 border-dashed border-[#0593A2] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 text-[#0593A2] font-bold">🇧🇷</div>
                <p className="text-2xl font-bold text-[#0593A2] mb-2">
                  {estatisticasMock.municipiosAtivos} Municípios Ativos
                </p>
                <p className="text-gray-600 max-w-md">
                  Mapeamento em tempo real em todo território nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0593A2] to-[#E50700] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sua Contribuição Salva Vidas
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cada denúncia pode prevenir dezenas de casos. Reporte focos do mosquito e proteja sua comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/municipios"
              className="bg-white text-[#E50700] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all text-lg shadow-2xl hover:scale-105"
            >
              🚀 Reportar Foco Agora
            </Link>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all text-lg">
              📞 Emergências de Saúde
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="https://i.imgur.com/hBsZGRA.png" 
                alt="Em Foco"
                className="h-8"
              />
              <span className="text-xl font-bold text-white">Em Foco</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                Sistema Nacional de Combate à Dengue
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
                <span>🛡️ Sistema 24/7</span>
                <span>🇧🇷 Cobertura Nacional</span>
                <span>🎯 Totalmente Gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;