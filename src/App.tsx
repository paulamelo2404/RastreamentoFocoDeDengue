// src/App.tsx (Novo Conteúdo Completo para Roteamento)

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataStoreService } from './services/DataStoreService';

// Importações dos novos componentes de layout e páginas
import Navbar from './components/Navbar'; 
import Home from './pages/Home';         
import Registro from './pages/Registro'; 

// Importações removidas, pois os componentes agora estão dentro da página Registro.tsx
// import FocoForm from './components/FocoForm'; 
// import FocoList from './components/FocoList'; 

// Use export default para o App funcionar como o componente raiz
export default function App() {
  
  // Efeito para inicializar o LocalStorage com dados mockados
  useEffect(() => {
    DataStoreService.initMockData();
  }, []);

  return (
    // O Router deve envolver toda a aplicação
    <Router>
      <div className="min-h-screen bg-gray-100">
        
        {/* Componente de Navegação (Navbar Moderna) */}
        <Navbar />

        {/* Área principal do conteúdo que mudará conforme a rota */}
        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            
            {/* Rota Raiz: Visão Geral e Mapeamento (Home.tsx) */}
            <Route path="/" element={<Home />} />
            
            {/* Rota de Registro: Formulário e Lista (Registro.tsx) */}
            <Route path="/registro" element={<Registro />} />
            
            {/* Rota de fallback */}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>

        <footer className="text-center text-xs text-gray-500 py-4 mt-8 border-t">
            MVP em Front-end. Persistência de dados simulada via LocalStorage.
        </footer>
      </div>
    </Router>
  );
}