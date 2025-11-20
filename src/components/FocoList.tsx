// src/components/FocoList.tsx

import React, { useState, useEffect } from 'react';
import { DataStoreService } from '../services/DataStoreService';
import type { FocoDeDengue } from '../models/DataModels';

const FocoList: React.FC = () => {
    const [focos, setFocos] = useState<FocoDeDengue[]>([]);
    
    // Função para carregar os dados salvos localmente
    const loadFocos = () => {
        const savedFocos = DataStoreService.getFocos();
        setFocos(savedFocos);
    };

    useEffect(() => {
        loadFocos();
        // Opcional: Adiciona um listener para recarregar a lista se o LocalStorage for alterado (melhora a experiência de teste)
        window.addEventListener('storage', loadFocos);
        return () => {
            window.removeEventListener('storage', loadFocos);
        };
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl space-y-4 mt-6">
            <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-bold text-gray-800">
                    📊 Focos Registrados ({focos.length})
                </h2>
                <button
                    onClick={loadFocos}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
                >
                    Recarregar Dados
                </button>
            </div>

            {focos.length === 0 ? (
                <p className="text-gray-500 italic">Nenhum registro local. Use o formulário acima para criar o primeiro foco.</p>
            ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                    {focos.slice().reverse().map((foco) => ( // Lista os mais recentes primeiro
                        <div key={foco.id} className="p-3 border rounded-lg shadow-sm bg-gray-50">
                            <p className="text-sm font-semibold text-red-600">ID Foco: {foco.id} | Recipiente: {foco.tipoRecipiente}</p>
                            <p className="text-xs text-gray-700">
                                Coordenadas: L. {foco.latitude.toFixed(5)}, L. {foco.longitude.toFixed(5)}
                            </p>
                            <p className={`text-xs font-medium ${foco.status === 'ativo' ? 'text-red-500' : 'text-green-500'}`}>
                                Status: {foco.status.toUpperCase()} | Registrado em: {foco.dataIdentificacao.toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FocoList;