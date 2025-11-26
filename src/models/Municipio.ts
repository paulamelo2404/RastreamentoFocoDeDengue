// src/models/Municipio.ts
export interface Municipio {
  id: string;
  nome: string;
  codigoIBGE: string;
  estado: string;
  populacao: number;
  area: number;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

export interface DadosMunicipio {
  municipioId: string;
  dataAtualizacao: Date;
  estatisticas: {
    focosAtivos: number;
    casosConfirmados: number;
    casosSuspeitos: number;
    taxaIncidencia: number;
    bairrosMonitorados: number;
    agentesAtivos: number;
  };
  alertas: Alerta[];
  areasCriticas: AreaCritica[];
}

export interface Alerta {
  id: string;
  tipo: 'alto' | 'medio' | 'baixo';
  local: string;
  descricao: string;
  data: Date;
  municipioId: string;
}

export interface AreaCritica {
  id: string;
  bairro: string;
  focosAtivos: number;
  casosConfirmados: number;
  risco: 'muito_alto' | 'alto' | 'medio' | 'baixo';
}