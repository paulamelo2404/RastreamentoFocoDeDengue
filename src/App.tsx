// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataStoreService } from './services/DataStoreService';

// Importações dos Componentes de Layout e Páginas
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';         
import Registro from './pages/Registro'; 
// import Municipios from './pages/Municipios'; // Descomente quando criar a página

// Use export default para o App funcionar como o componente raiz
export default function App() {
  
  // Efeito para inicializar o LocalStorage com dados mockados na primeira carga
  useEffect(() => {
    DataStoreService.initMockData();
  }, []);

  return (
    // O Router deve envolver toda a aplicação
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        
        {/* Componente de Navegação (Navbar Moderna) */}
        <Navbar />

        {/* Área principal do conteúdo que cresce e muda conforme a rota */}
        <main className="flex-grow w-full">
          <Routes>
            
            {/* Rota Raiz: Home Geral com Apresentação */}
            <Route path="/" element={<Home />} />
            
            {/* Rota de Registro: Formulário e Lista de Focos */}
            <Route path="/registro" element={<Registro />} />
            
            {/* Rota de Municípios (Para implementar depois) */}
            {/* <Route path="/municipios" element={<Municipios />} /> */}
            
            {/* Rota de fallback - Redireciona para Home */}
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>

        {/* Componente de Rodapé */}
        <Footer /> 
        
      </div>
    </Router>
  );
}