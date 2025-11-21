// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white mt-10 p-6 shadow-inner border-t-4 border-red-900">
      <div className="max-w-6xl mx-auto text-center text-xs space-y-2 md:flex md:justify-between md:items-center">
        
        {/* Informação Geral do Projeto */}
        <p className="text-gray-300">
          © 2025 Dengue-App | Projeto Integrador II: Desenvolvimento Estruturado de Sistemas.
        </p>
        
        {/* Detalhes de Tecnologia e Conformidade */}
        <div className="text-gray-400">
          <span className="font-semibold">Tecnologia:</span> React, TypeScript, Tailwind CSS.
          <span className="mx-2">|</span>
          <span className="font-semibold text-yellow-300">Conformidade:</span> LGPD (Dados armazenados em servidores nacionais simulados).
        </div>
        
        {/* Integrantes podem ser colocados aqui ou em uma página "Sobre" */}
        <p className="text-gray-400">
          Desenvolvido pelo Grupo 14 (SENAC EAD 2025).
        </p>
      </div>
    </footer>
  );
};

export default Footer;