// src/components/FocoForm.tsx

import React, { useState } from 'react';
import type { FocoDeDengue } from '../models/DataModels';
import { DataStoreService } from '../services/DataStoreService';

const FocoForm: React.FC = () => {
  
  // Estado inicial baseado na interface FocoDeDengue (omitindo campos gerados)
  const [focoData, setFocoData] = useState<Omit<FocoDeDengue, 'id' | 'pontoFocalId'>>({
    latitude: 0,
    longitude: 0,
    tipoRecipiente: '',
    agenteIdentificadorMatricula: 'AGENTE-001A', // Matrícula de teste
    status: 'ativo',
    registroFoco: '',
    dataIdentificacao: new Date(),
  });
  
  // Simula a captura de GPS (RF001.2)
  const getCoordinates = () => {
    setFocoData(prev => ({
      ...prev,
      latitude: -23.70295, // Exemplo Jd. Ângela
      longitude: -46.77258, // Exemplo Jd. Ângela
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (focoData.latitude === 0 || !focoData.tipoRecipiente) {
        alert('Capture as coordenadas e selecione o recipiente.');
        return;
    }

    const focoParaSalvar: Omit<FocoDeDengue, 'id'> = {
        ...focoData,
        pontoFocalId: 101, // ID de Ponto Focal mockado
        dataIdentificacao: new Date(),
        registroFoco: `FOC-${Date.now()}`
    };
    
    // Salva no LocalStorage (simulação de sincronização offline)
    DataStoreService.saveFoco(focoParaSalvar);

    alert('✅ Foco registrado localmente! (Pronto para sincronização)');
    
    // Limpar campos para novo registro
    setFocoData(prev => ({ 
        ...prev, 
        latitude: 0, 
        longitude: 0, 
        tipoRecipiente: '',
    }));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-2xl space-y-6 border-t-4 border-red-600">
      <h2 className="text-2xl font-extrabold text-red-700 text-center">
        🚨 Registro de Foco (MVP)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Captura de GPS */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <label className="block text-sm font-bold text-gray-700 mb-1">Localização (RF001.2)</label>
          <div className="flex space-x-2">
            <input type="text" readOnly value={`Lat: ${focoData.latitude.toFixed(5)}`} className="p-2 border border-gray-300 rounded-md bg-white flex-grow text-sm"/>
            <input type="text" readOnly value={`Lon: ${focoData.longitude.toFixed(5)}`} className="p-2 border border-gray-300 rounded-md bg-white flex-grow text-sm"/>
          </div>
          <button type="button" onClick={getCoordinates} className="mt-2 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-150 text-sm disabled:bg-gray-400" disabled={focoData.latitude !== 0}>
            📍 Capturar Coordenadas GPS
          </button>
        </div>

        {/* Tipo de Recipiente (RF002.1) */}
        <div>
          <label htmlFor="tipo" className="block text-sm font-bold text-gray-700">Tipo de Recipiente</label>
          <select id="tipo" value={focoData.tipoRecipiente} onChange={(e) => setFocoData(prev => ({ ...prev, tipoRecipiente: e.target.value }))} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition">
            <option value="">Selecione o tipo de criadouro...</option>
            <option value="pneu">Pneu</option>
            <option value="vaso">Vaso/Prato</option>
            <option value="caixa_agua">Caixa d'Água</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Agente Identificador (RF003.2) */}
        <div>
          <label className="block text-sm font-bold text-gray-700">Agente Responsável</label>
          <p className="mt-1 p-2 bg-yellow-100 text-yellow-800 rounded-md text-sm font-medium">
            Matrícula: {focoData.agenteIdentificadorMatricula} (Usuário Logado)
          </p>
        </div>
        
        <button type="submit" className="w-full py-3 px-4 rounded-md shadow-lg text-lg font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-200 disabled:bg-red-300" disabled={!focoData.tipoRecipiente || focoData.latitude === 0}>
          REGISTRAR FOCO (SALVAR LOCALMENTE)
        </button>
      </form>
    </div>
  );
};

export default FocoForm;