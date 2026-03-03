
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: Language;
}

const StepGuide: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">{t.stepsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.steps.map((step: any, idx: number) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold mb-4">
              {idx + 1}
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">{step.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepGuide;
