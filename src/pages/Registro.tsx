// src/pages/Registro.tsx

import React from 'react';
import FocoForm from '../components/FocoForm';
import FocoList from '../components/FocoList';

const Registro: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b pb-2">Cadastro e Monitoramento de Focos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FocoForm />
        <FocoList />
      </div>
    </div>
  );
};

export default Registro;