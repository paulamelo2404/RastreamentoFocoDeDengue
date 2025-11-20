// src/models/DataModels.ts

/**
 * 1. Entidade Agente de Saúde (Baseado em RF003.1)
 * Representa o profissional que realiza inspeções e registros.
 */
export interface AgenteDeSaude {
  matricula: string;
  nome: string;
  telefone: string;
  areaAtuacao: string;
  id?: number; 
}

/**
 * 2. Entidade Ponto Focal (Baseado em RF001.1)
 * Representa o local físico a ser inspecionado, com coordenadas geográficas.
 */
export interface PontoFocal {
  identificadorPonto: string;
  tipo: 'residencial' | 'comercial' | 'terreno_baldio' | 'outro';
  enderecamento: string;
  latitude: number;         // Coordenada geográfica
  longitude: number;        // Coordenada geográfica
  agenteResponsavelMatricula: string;
  id?: number;
}

/**
 * 3. Entidade Foco de Dengue (Baseado em RF002.1)
 * Caracteriza um foco encontrado em um Ponto Focal.
 */
export interface FocoDeDengue {
  registroFoco: string;
  tipoRecipiente: string; // Tipo de recipiente (pneu, vaso, etc.)
  status: 'ativo' | 'eliminado' | 'recorrente';
  dataIdentificacao: Date;
  latitude: number;         // Coordenada geográfica
  longitude: number;        // Coordenada geográfica
  pontoFocalId: number; // Chave estrangeira para Ponto Focal
  agenteIdentificadorMatricula: string;
  id?: number;
}

/**
 * 4. Entidade Caso Suspeito (Baseado em RF004.1)
 * Notificação de possível infecção.
 */
export interface CasoSuspeito {
  protocoloCaso: string;
  dataNotificacao: Date;
  enderecoResidencia: string;
  statusConfirmacao: 'suspeito' | 'confirmado' | 'descartado';
  agenteRegistradorMatricula: string;
  id?: number;
}