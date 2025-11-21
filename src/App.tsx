// src/App.tsx (Código Completo com Rotas, Navbar e Footer)

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataStoreService } from './services/DataStoreService';

// Importações dos Componentes de Layout e Páginas
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';         
import Registro from './pages/Registro'; 

// Use export default para o App funcionar como o componente raiz
export default function App() {
  
  // Efeito para inicializar o LocalStorage com dados mockados na primeira carga
  useEffect(() => {
    DataStoreService.initMockData();
  }, []);

  return (
    // O Router deve envolver toda a aplicação
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        
        {/* Componente de Navegação (Navbar Moderna) */}
        <Navbar />

        {/* Área principal do conteúdo que cresce e muda conforme a rota */}
        <main className="max-w-6xl mx-auto flex-grow w-full p-4">
          <Routes>
            
            {/* Rota Raiz: Visão Geral e Mapeamento (Home.tsx) */}
            <Route path="/" element={<Home />} />
            
            {/* Rota de Registro: Formulário e Lista (Registro.tsx) */}
            <Route path="/registro" element={<Registro />} />
            
            {/* Rota de fallback */}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>

        {/* Componente de Rodapé Fixo */}
        <Footer /> 
        
      </div>
    </Router>
  );
}