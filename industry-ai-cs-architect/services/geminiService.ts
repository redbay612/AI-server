
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { CSAgentConfig } from "../types";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

const orderStatusFunction: FunctionDeclaration = {
  name: 'checkOrderStatus',
  parameters: {
    type: Type.OBJECT,
    description: 'Check the status of an order using an order ID.',
    properties: {
      orderId: {
        type: Type.STRING,
        description: 'The unique ID of the order (e.g., ORD-123).',
      },
    },
    required: ['orderId'],
  },
};

const bookingFunction: FunctionDeclaration = {
  name: 'bookAppointment',
  parameters: {
    type: Type.OBJECT,
    description: 'Book an appointment for the customer.',
    properties: {
      date: { type: Type.STRING, description: 'ISO date string' },
      service: { type: Type.STRING, description: 'The service to book' }
    },
    required: ['date', 'service']
  }
};

export const chatWithAgent = async (config: CSAgentConfig, history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  const ai = getAIClient();
  
  const systemInstruction = `
    ${config.persona}
    Tone: ${config.tone}
    Knowledge Base: ${config.knowledgeBase}
    Preferred Language: ${config.language} (Response MUST be in this language)
    You must only act as the customer service agent for the specified industry.
    If you don't know the answer based on the knowledge base, ${config.enableSearch ? 'you may use the search tool' : 'inform the user you will connect them to a human'}.
  `;

  const tools: any[] = [];
  if (config.enableSearch) tools.push({ googleSearch: {} });
  if (config.enableFunctionCalling) {
    tools.push({ functionDeclarations: [orderStatusFunction, bookingFunction] });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction,
        tools: tools.length > 0 ? tools : undefined,
      }
    });

    if (response.functionCalls && response.functionCalls.length > 0) {
      const call = response.functionCalls[0];
      if (call.name === 'checkOrderStatus') {
        const statuses: Record<string, string> = {
          'zh-TW': `[系統：正在查詢...] 訂單 ${call.args.orderId} 目前正在運送中，預計週五送達。`,
          'en': `[System: Searching...] Order ${call.args.orderId} is in transit and expected on Friday.`,
          'ko': `[시스템: 조회 중...] 주문 ${call.args.orderId}은(는) 현재 배송 중이며 금요일에 도착할 예정입니다.`,
          'ja': `[システム：照会中...] 注文 ${call.args.orderId} は現在配送中であり、金曜日に到着予定です。`
        };
        return statuses[config.language] || statuses['en'];
      }
      if (call.name === 'bookAppointment') {
        const bookings: Record<string, string> = {
          'zh-TW': `[系統：訪問日曆...] 已成功預訂 ${call.args.date} 的 ${call.args.service}。確認郵件已發送。`,
          'en': `[System: Accessing Calendar...] Booked ${call.args.service} for ${call.args.date}. Confirmation sent.`,
          'ko': `[시스템: 캘린더 접속 중...] ${call.args.date}에 ${call.args.service} 예약이 완료되었습니다. 확인 메일이 발송되었습니다.`,
          'ja': `[システム：カレンダーにアクセス...] ${call.args.date} の ${call.args.service} を予約しました。確認メールを送信しました。`
        };
        return bookings[config.language] || bookings['en'];
      }
    }

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with AI.";
  }
};
