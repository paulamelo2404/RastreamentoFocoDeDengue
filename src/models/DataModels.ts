// src/models/DataModels.ts

/**
 * MODELOS DE DADOS - SISTEMA DE RASTREAMENTO DE FOCOS DE DENGUE
 * Baseado nos requisitos funcionais RF001, RF002, RF003, RF004
 */

// =============================================================================
// 1. ENTIDADE AGENTE DE SAÚDE (RF003.1 - Gestão de Agentes de Saúde)
// =============================================================================

export interface AgenteDeSaude {
  // Identificação (RF003.1)
  matricula: string;
  nome: string;
  telefone: string;
  areaAtuacao: string;
  
  // Controle interno
  id?: number;
}

// =============================================================================
// 2. ENTIDADE PONTO FOCAL (RF001.1 - Gestão de Cadastro e Localização)
// =============================================================================

export type TipoPontoFocal = 'residencial' | 'comercial' | 'terreno_baldio' | 'outro';

export interface PontoFocal {
  // Identificação e localização (RF001.1, RF001.2, RF001.3)
  identificadorPonto: string;
  tipo: TipoPontoFocal;
  enderecamento: string;
  latitude: number;
  longitude: number;
  
  // Relacionamentos
  agenteResponsavelMatricula: string;
  
  // Controle interno
  id?: number;
}

// =============================================================================
// 3. ENTIDADE FOCO DE DENGUE (RF002.1 - Controle de Focos de Dengue)
// =============================================================================

export type StatusFoco = 'ativo' | 'eliminado' | 'recorrente';

export interface FocoDeDengue {
  // Identificação do foco (RF002.1)
  registroFoco: string;
  tipoRecipiente: string;
  status: StatusFoco;
  dataIdentificacao: Date;
  
  // Localização (coordenadas específicas do foco)
  latitude: number;
  longitude: number;
  
  // Relacionamentos (RF002.2)
  pontoFocalId: number;
  agenteIdentificadorMatricula: string;
  
  // Controle interno
  id?: number;
}

// =============================================================================
// 4. ENTIDADE CASO SUSPEITO (RF004.1 - Monitoramento de Casos Suspeitos)
// =============================================================================

export type StatusCaso = 'suspeito' | 'confirmado' | 'descartado';

export interface CasoSuspeito {
  // Identificação do caso (RF004.1, RF004.2)
  protocoloCaso: string;
  dataNotificacao: Date;
  enderecoResidencia: string;
  statusConfirmacao: StatusCaso;
  
  // Relacionamentos
  agenteRegistradorMatricula: string;
  
  // Controle interno
  id?: number;
}

// =============================================================================
// TIPOS AUXILIARES PARA FORMULÁRIOS
// =============================================================================

/**
 * Tipo para criação de novos registros (sem ID)
 */
export type NovoPontoFocal = Omit<PontoFocal, 'id'>;
export type NovoFocoDeDengue = Omit<FocoDeDengue, 'id'>;
export type NovoCasoSuspeito = Omit<CasoSuspeito, 'id'>;

/**
 * Tipo para formulários de cadastro
 */
export type FormularioPontoFocal = Omit<PontoFocal, 'id' | 'identificadorPonto'>;
export type FormularioFocoDeDengue = Omit<FocoDeDengue, 'id' | 'registroFoco'>;

// =============================================================================
// CONSTANTES PARA OPÇÕES DE FORMULÁRIO
// =============================================================================

export const TIPOS_PONTO_FOCAL: { value: TipoPontoFocal; label: string }[] = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'terreno_baldio', label: 'Terreno Baldio' },
  { value: 'outro', label: 'Outro' }
];

export const STATUS_FOCO: { value: StatusFoco; label: string }[] = [
  { value: 'ativo', label: 'Ativo' },
  { value: 'eliminado', label: 'Eliminado' },
  { value: 'recorrente', label: 'Recorrente' }
];

export const STATUS_CASO: { value: StatusCaso; label: string }[] = [
  { value: 'suspeito', label: 'Suspeito' },
  { value: 'confirmado', label: 'Confirmado' },
  { value: 'descartado', label: 'Descartado' }
];

export const TIPOS_RECIPIENTE = [
  'pneu',
  'vaso_planta',
  'garrafa',
  'lata',
  'caixa_dagua',
  'piscina',
  'calha',
  'outro'
];