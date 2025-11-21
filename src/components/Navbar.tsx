// src/components/Navbar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Estilos base para os links
const baseLinkClasses = "px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out text-sm";
// Estilos para links ativos (usando useLocation para saber qual rota está ativa)
const activeLinkClasses = "bg-red-500 text-white shadow-md";
// Estilos para links inativos
const inactiveLinkClasses = "text-gray-200 hover:bg-red-600/50 hover:text-white";

const Navbar: React.FC = () => {
  const location = useLocation(); // Hook do React Router para obter a rota atual

  // Função auxiliar para determinar a classe CSS com base na rota
  const getLinkClasses = (path: string) => {
    return location.pathname === path
      ? `${baseLinkClasses} ${activeLinkClasses}`
      : `${baseLinkClasses} ${inactiveLinkClasses}`;
  };

  return (
    <header className="bg-gray-800 shadow-xl border-b-4 border-red-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo/Título do Aplicativo */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl" role="img" aria-label="mosquito">🦟</span>
          <Link to="/" className="text-white text-xl font-extrabold tracking-wide hover:text-red-300">
            Dengue-App
          </Link>
        </div>
        
        {/* Links de Navegação */}
        <nav className="flex space-x-3">
          
          <Link to="/" className={getLinkClasses("/")}>
            Visão Geral (Mapa)
          </Link>
          
          <Link to="/registro" className={getLinkClasses("/registro")}>
            Registrar Foco
          </Link>
          
          {/* Futuramente: Outros links como /estatisticas, /casos */}
          <button className={`${inactiveLinkClasses} ${baseLinkClasses} text-gray-400 cursor-not-allowed`} disabled>
              Estatísticas
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;