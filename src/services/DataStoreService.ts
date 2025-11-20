// src/services/DataStoreService.ts

// Usamos 'import type' para as interfaces para evitar erros em ambientes TS modernos (solução para o erro anterior)
import type { FocoDeDengue, AgenteDeSaude, PontoFocal } from '../models/DataModels';

const STORAGE_KEYS = {
    FOCOS: 'dengue_focos',
    AGENTES: 'dengue_agentes',
    PONTOS: 'dengue_pontos',
};

// --- Funções Auxiliares de LocalStorage ---

function loadData<T>(key: string): T[] {
    try {
        const data = localStorage.getItem(key);
        if (!data) return [];

        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) return [];

        return parsed.map((raw: any) => {
            const obj: any = { ...raw };
            // Normaliza datas comuns de entidades deste projeto
            if (obj && typeof obj === 'object') {
                if (obj.dataIdentificacao && typeof obj.dataIdentificacao === 'string') {
                    const d = new Date(obj.dataIdentificacao);
                    obj.dataIdentificacao = isNaN(d.getTime()) ? obj.dataIdentificacao : d;
                }
                if (obj.dataNotificacao && typeof obj.dataNotificacao === 'string') {
                    const d2 = new Date(obj.dataNotificacao);
                    obj.dataNotificacao = isNaN(d2.getTime()) ? obj.dataNotificacao : d2;
                }
            }
            return obj as T;
        });
    } catch (e) {
        console.error(`Falha crítica ao carregar/parsear dados para ${key}. Retornando array vazio.`, e);
        return [];
    }
}

function saveData<T>(key: string, data: T[]): void {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Erro ao salvar dados:', key, e);
    }
}

// --- Serviço Principal para o MVP ---

export const DataStoreService = {
    
    // Inicializa o LocalStorage com dados mockados para teste
    initMockData: (): void => {
        // 1. Agentes de Saúde
        if (loadData<AgenteDeSaude>(STORAGE_KEYS.AGENTES).length === 0) {
            const mockAgentes: AgenteDeSaude[] = [
                { id: 1, matricula: 'AGENTE-001A', nome: 'Filipe Lima', telefone: '11987654321', areaAtuacao: 'Jd. Leste' },
                { id: 2, matricula: 'AGENTE-002B', nome: 'Gabrielle Sales', telefone: '11912345678', areaAtuacao: 'Jd. Oeste' },
            ];
            saveData(STORAGE_KEYS.AGENTES, mockAgentes);
        }
        
        // 2. Ponto Focal (Para associação dos Focos)
        if (loadData<PontoFocal>(STORAGE_KEYS.PONTOS).length === 0) {
            const mockPontos: PontoFocal[] = [
                // Ponto Focal de Teste (ID 101) para o Jardim Ângela
                { id: 101, identificadorPonto: 'PF-101', tipo: 'residencial', enderecamento: 'Rua de Teste, 100', latitude: -23.7000, longitude: -46.7700, agenteResponsavelMatricula: 'AGENTE-001A' },
            ];
            saveData(STORAGE_KEYS.PONTOS, mockPontos);
        }
    },

    // Retorna todos os focos salvos
    getFocos: (): FocoDeDengue[] => {
        return loadData<FocoDeDengue>(STORAGE_KEYS.FOCOS);
    },
    
    // Salva um novo foco
    saveFoco: (novoFoco: Omit<FocoDeDengue, 'id'>): void => {
        const focos = loadData<FocoDeDengue>(STORAGE_KEYS.FOCOS);
        
        // Simula a atribuição de um novo ID
        const novoId = focos.length > 0 ? Math.max(...focos.map(f => f.id || 0)) + 1 : 1;
        
        const focoComId: FocoDeDengue = { 
            ...novoFoco, 
            id: novoId 
        };

        focos.push(focoComId);
        saveData(STORAGE_KEYS.FOCOS, focos);
    },
};