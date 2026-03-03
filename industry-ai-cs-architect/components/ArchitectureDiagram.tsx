
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: Language;
}

const ArchitectureDiagram: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm overflow-hidden">
      <h3 className="text-xl font-bold mb-6 text-slate-800">{t.architectureTitle}</h3>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
        
        {/* User */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
          <span className="mt-2 text-sm font-semibold">{t.userQuery}</span>
        </div>

        <svg className="hidden md:block w-12 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

        {/* Brain */}
        <div className="flex flex-col items-center bg-indigo-50 p-6 rounded-2xl border-2 border-dashed border-indigo-400">
          <div className="text-xs font-mono mb-2 text-indigo-600 uppercase tracking-widest">{t.geminiEngine}</div>
          <div className="flex flex-col space-y-3">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium border border-indigo-100">{t.sysInstruction}</div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium border border-indigo-100">{t.contextWindow}</div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm text-xs font-medium border border-indigo-100">{t.searchGrounding}</div>
          </div>
        </div>

        <svg className="hidden md:block w-12 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

        {/* Resources */}
        <div className="flex flex-col items-center space-y-4">
          <div className="px-6 py-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
            <div className="text-xs font-bold text-emerald-700">{t.dbTools}</div>
            <div className="text-[10px] text-emerald-600">{t.funcCalling}</div>
          </div>
          <div className="px-6 py-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
            <div className="text-xs font-bold text-amber-700">{t.ragKnowledge}</div>
            <div className="text-[10px] text-amber-600">{t.companyDocs}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
