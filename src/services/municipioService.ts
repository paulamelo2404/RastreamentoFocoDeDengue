// src/services/municipioService.ts
import type { Municipio, DadosMunicipio } from '../models/Municipio';

// Dados mock de municípios (você pode expandir essa lista)
export const municipiosMock: Municipio[] = [
  {
    id: '1',
    nome: 'Jardim Ângela',
    codigoIBGE: '3550308',
    estado: 'SP',
    populacao: 250000,
    area: 45.2,
    coordenadas: { lat: -23.7046, lng: -46.7689 }
  },
  {
    id: '2', 
    nome: 'Capão Redondo',
    codigoIBGE: '3550308',
    estado: 'SP',
    populacao: 280000,
    area: 38.5,
    coordenadas: { lat: -23.6689, lng: -46.7682 }
  },
  {
    id: '3',
    nome: 'Grajaú',
    codigoIBGE: '3550308',
    estado: 'SP',
    populacao: 350000,
    area: 52.1,
    coordenadas: { lat: -23.7186, lng: -46.6997 }
  }
];

// Dados específicos por município
export const dadosMunicipiosMock: Record<string, DadosMunicipio> = {
  '1': {
    municipioId: '1',
    dataAtualizacao: new Date('2025-01-20'),
    estatisticas: {
      focosAtivos: 12,
      casosConfirmados: 5,
      casosSuspeitos: 8,
      taxaIncidencia: 5.2,
      bairrosMonitorados: 15,
      agentesAtivos: 3
    },
    alertas: [
      { id: '1', tipo: 'alto', local: 'Rua Maria Cândida', descricao: 'Múltiplos focos identificados', data: new Date('2025-01-19'), municipioId: '1' },
      { id: '2', tipo: 'medio', local: 'Vila Natal', descricao: 'Caso suspeito em investigação', data: new Date('2025-01-18'), municipioId: '1' }
    ],
    areasCriticas: [
      { id: '1', bairro: 'Jardim São Luis', focosAtivos: 4, casosConfirmados: 2, risco: 'muito_alto' },
      { id: '2', bairro: 'Parque Santo Antonio', focosAtivos: 3, casosConfirmados: 1, risco: 'alto' }
    ]
  },
  '2': {
    municipioId: '2',
    dataAtualizacao: new Date('2025-01-20'),
    estatisticas: {
      focosAtivos: 8,
      casosConfirmados: 3,
      casosSuspeitos: 5,
      taxaIncidencia: 3.8,
      bairrosMonitorados: 12,
      agentesAtivos: 2
    },
    alertas: [
      { id: '3', tipo: 'medio', local: 'Rua do Campo', descricao: 'Foco em terreno baldio', data: new Date('2025-01-19'), municipioId: '2' }
    ],
    areasCriticas: [
      { id: '3', bairro: 'Vila Prel', focosAtivos: 3, casosConfirmados: 1, risco: 'alto' }
    ]
  },
  '3': {
    municipioId: '3',
    dataAtualizacao: new Date('2025-01-20'),
    estatisticas: {
      focosAtivos: 15,
      casosConfirmados: 7,
      casosSuspeitos: 10,
      taxaIncidencia: 6.8,
      bairrosMonitorados: 18,
      agentesAtivos: 4
    },
    alertas: [
      { id: '4', tipo: 'alto', local: 'Avenida Diederichsen', descricao: 'Surto em andamento', data: new Date('2025-01-20'), municipioId: '3' },
      { id: '5', tipo: 'alto', local: 'Rua Rio das Pedras', descricao: 'Múltiplos casos confirmados', data: new Date('2025-01-19'), municipioId: '3' }
    ],
    areasCriticas: [
      { id: '4', bairro: 'Chácara Santa Maria', focosAtivos: 6, casosConfirmados: 3, risco: 'muito_alto' },
      { id: '5', bairro: 'Jardim Lucélia', focosAtivos: 4, casosConfirmados: 2, risco: 'alto' }
    ]
  }
};

export const municipioService = {
  listarMunicipios: (): Promise<Municipio[]> => Promise.resolve(municipiosMock),
  
  obterDadosMunicipio: (municipioId: string): Promise<DadosMunicipio> => {
    const dados = dadosMunicipiosMock[municipioId];
    if (!dados) {
      throw new Error('Município não encontrado');
    }
    return Promise.resolve(dados);
  },
  
  obterMunicipioPorId: (municipioId: string): Promise<Municipio> => {
    const municipio = municipiosMock.find(m => m.id === municipioId);
    if (!municipio) {
      throw new Error('Município não encontrado');
    }
    return Promise.resolve(municipio);
  }
};