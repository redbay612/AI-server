
export enum IndustryType {
  ECOMMERCE = 'ECOMMERCE',
  MEDICAL = 'MEDICAL',
  REAL_ESTATE = 'REAL_ESTATE',
  EDUCATION = 'EDUCATION',
  GENERAL = 'GENERAL'
}

export type Language = 'zh-TW' | 'en' | 'ko' | 'ja';

export interface CSAgentConfig {
  industry: IndustryType;
  persona: string;
  tone: 'professional' | 'friendly' | 'empathetic' | 'concise';
  knowledgeBase: string;
  enableSearch: boolean;
  enableFunctionCalling: boolean;
  language: Language;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
