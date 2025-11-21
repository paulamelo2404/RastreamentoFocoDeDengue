// src/components/Navbar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Estilos base para os links
// Usamos text-sm para um visual mais clean/moderno
const baseLinkClasses = "px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out text-sm"; 
// Estilos para links ativos (Azul Claro como fundo de destaque)
const activeLinkClasses = "bg-brand-light text-neutral-dark shadow-md"; 
// Estilos para links inativos (Texto branco no fundo azul escuro, com hover suave)
const inactiveLinkClasses = "text-white hover:bg-brand-light/30"; 

const Navbar: React.FC = () => {
  const location = useLocation();

  // Função auxiliar para determinar a classe CSS com base na rota
  const getLinkClasses = (path: string) => {
    return location.pathname === path
      ? `${baseLinkClasses} ${activeLinkClasses}`
      : `${baseLinkClasses} ${inactiveLinkClasses}`;
  };

  return (
    // Fundo Primary-Brand (#004CCC) e borda inferior Danger (#B91C1C) para urgência
    <header className="bg-brand-DEFAULT shadow-xl border-b-4 border-danger sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo/Título do Aplicativo */}
        <div className="flex items-center space-x-3">
          {/* Ícone usa o Neutral Dark para forte contraste contra o azul escuro */}
          <span className="text-2xl text-neutral-dark" role="img" aria-label="mosquito">🦟</span>
          <Link to="/" className="text-white text-xl font-extrabold tracking-wide hover:text-brand-light transition">
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
          
          {/* Botão Estatísticas desativado (usando classes neutras para visual) */}
          <button className={`${baseLinkClasses} text-gray-400 cursor-not-allowed`} disabled>
              Estatísticas
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;