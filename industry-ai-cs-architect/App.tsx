
import React, { useState, useEffect, useRef } from 'react';
import { IndustryType, CSAgentConfig, ChatMessage, Language } from './types';
import { INDUSTRY_TEMPLATES, TRANSLATIONS, LANGUAGES } from './constants';
import { chatWithAgent } from './services/geminiService';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import StepGuide from './components/StepGuide';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh-TW');
  const [config, setConfig] = useState<CSAgentConfig>({
    industry: IndustryType.ECOMMERCE,
    persona: INDUSTRY_TEMPLATES[IndustryType.ECOMMERCE].persona['zh-TW'],
    tone: 'friendly',
    knowledgeBase: INDUSTRY_TEMPLATES[IndustryType.ECOMMERCE].knowledgeBase['zh-TW'],
    enableSearch: true,
    enableFunctionCalling: true,
    language: 'zh-TW'
  });
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Update config when language changes
  useEffect(() => {
    const template = INDUSTRY_TEMPLATES[config.industry];
    setConfig(prev => ({
      ...prev,
      language: lang,
      persona: template.persona[lang] || template.persona['en'],
      knowledgeBase: template.knowledgeBase[lang] || template.knowledgeBase['en']
    }));
    setMessages([]); // Optional: reset chat on language change for clarity
  }, [lang]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const response = await chatWithAgent(config, history, inputValue);

    const botMessage: ChatMessage = {
      role: 'model',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const updateConfig = (key: keyof CSAgentConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const loadTemplate = (industry: IndustryType) => {
    const template = INDUSTRY_TEMPLATES[industry];
    setConfig(prev => ({
      ...prev,
      industry,
      persona: template.persona[lang] || template.persona['en'],
      knowledgeBase: template.knowledgeBase[lang] || template.knowledgeBase['en']
    }));
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-slate-800">{t.title}</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <select 
              className="text-sm font-medium border-none bg-transparent focus:ring-0 cursor-pointer text-slate-600"
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4 text-sm font-medium">
            <span className="text-slate-500">{t.poweredBy}</span>
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <a href="#guide" className="hover:text-indigo-600">{t.processGuide}</a>
            <a href="#test" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">{t.testPrototype}</a>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 space-y-12">
        {/* Intro Section */}
        <section className="text-center space-y-4 py-8">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight whitespace-pre-line">
            {t.subtitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {t.intro}
          </p>
        </section>

        {/* Architecture Section */}
        <section>
          <ArchitectureDiagram lang={lang} />
        </section>

        {/* Builder & Preview Section */}
        <section id="test" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-b pb-4">{t.builderTitle}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.industryTemplate}</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={config.industry}
                  onChange={(e) => loadTemplate(e.target.value as IndustryType)}
                >
                  {Object.values(IndustryType).map(type => (
                    <option key={type} value={type}>{t.industries[type]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.persona}</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-20 text-sm"
                  value={config.persona}
                  onChange={(e) => updateConfig('persona', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.tone}</label>
                <div className="grid grid-cols-2 gap-2">
                  {['professional', 'friendly', 'empathetic', 'concise'].map(tone => (
                    <button 
                      key={tone}
                      onClick={() => updateConfig('tone', tone)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${config.tone === tone ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-600 hover:border-indigo-400'}`}
                    >
                      {t.tones[tone]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.knowledgeBase}</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none h-28 text-sm"
                  value={config.knowledgeBase}
                  onChange={(e) => updateConfig('knowledgeBase', e.target.value)}
                />
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{t.enableSearch}</span>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                    checked={config.enableSearch}
                    onChange={(e) => updateConfig('enableSearch', e.target.checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{t.enableFunc}</span>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                    checked={config.enableFunctionCalling}
                    onChange={(e) => updateConfig('enableFunctionCalling', e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[600px]">
            <div className="bg-slate-50 border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-sm font-bold text-slate-700">{t.previewTitle}: {t.industries[config.industry]}</span>
              </div>
              <button 
                onClick={() => setMessages([])}
                className="text-xs text-slate-500 hover:text-red-600 transition"
              >
                {t.clearHistory}
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-3">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <p className="text-sm">{t.startChatHint}</p>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 px-4 py-2 rounded-2xl rounded-tl-none flex space-x-1 items-center h-8">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2 bg-slate-50 border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-500 transition">
                <input 
                  type="text" 
                  className="flex-grow bg-transparent outline-none text-sm py-1"
                  placeholder={t.inputPlaceholder.replace('{industry}', t.industries[config.industry])}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
              <p className="text-[10px] text-center mt-2 text-slate-400">
                {t.tip}
              </p>
            </div>
          </div>
        </section>

        {/* Full Guide Section */}
        <section id="guide">
          <StepGuide lang={lang} />
        </section>

        {/* Footer info */}
        <section className="bg-indigo-900 rounded-3xl p-10 text-white text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">{t.readyTitle}</h2>
            <p className="text-indigo-200 max-w-xl mx-auto">
              {t.readyDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition">{t.viewDocs}</button>
              <button className="px-8 py-3 bg-indigo-700 text-white border border-indigo-500 rounded-full font-bold hover:bg-indigo-600 transition">{t.contactSupport}</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 px-6 text-center text-slate-500 text-sm">
        &copy; 2024 {t.title}. Built with Google Gemini & React.
      </footer>
    </div>
  );
};

export default App;
