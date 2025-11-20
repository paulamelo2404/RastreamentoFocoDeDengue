// src/App.tsx

import React, { useEffect } from 'react';
import FocoForm from './components/FocoForm';
import FocoList from './components/FocoList';
import { DataStoreService } from './services/DataStoreService';

export default function App() {
  useEffect(() => {
    DataStoreService.initMockData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl shadow flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold text-red-800">
            Sistema de Mapeamento de Dengue - MVP
          </h1>
          <span className="text-xs md:text-sm text-green-700 font-semibold">
            React montado com sucesso
          </span>
        </div>

        <FocoForm />
        <FocoList />

        <p className="text-center text-xs text-gray-500 mt-10">
          MVP em Front-end. Persistência de dados simulada via LocalStorage.
        </p>
      </div>
    </div>
  );
}
