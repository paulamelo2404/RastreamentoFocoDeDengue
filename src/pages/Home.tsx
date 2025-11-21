// src/pages/Home.tsx

import React from 'react';
// Importaremos o MapViewer aqui no próximo passo, mas vamos deixar o espaço preparado.

const Home: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-red-700 mb-6 border-b pb-2">Visão Geral e Mapeamento de Risco</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
        <p className="text-gray-600 mb-4">
          Esta será a área central de visualização (Dashboard/Mapa). 
          Foque na distribuição geográfica e nas estatísticas gerais (RF005).
        </p>
        
        {/* Aqui será inserido o MapViewer no Passo 7 */}
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg border border-dashed text-gray-400">
          [Área reservada para o Mapa Geográfico e Estatísticas]
        </div>
      </div>
    </div>
  );
};

export default Home;