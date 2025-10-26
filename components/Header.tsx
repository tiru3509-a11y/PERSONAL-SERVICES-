
import React from 'react';
import type { Language } from '../types';

interface HeaderProps {
  title: string;
  language: Language;
  toggleLanguage: () => void;
  languageLabels: { en: string; te: string };
}

export const Header: React.FC<HeaderProps> = ({ title, language, toggleLanguage, languageLabels }) => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-10 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <span className="text-2xl font-bold text-white tracking-tight">{title}</span>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="relative w-28 h-9 bg-slate-800 rounded-full flex items-center justify-between p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
            >
              <span className={`absolute left-1 w-12 h-7 rounded-full bg-cyan-500 transition-transform duration-300 ${language === 'te' ? 'transform translate-x-14' : ''}`}></span>
              <span className={`z-10 w-1/2 text-center text-sm font-semibold ${language === 'en' ? 'text-white' : 'text-slate-300'}`}>{languageLabels.en}</span>
              <span className={`z-10 w-1/2 text-center text-sm font-semibold ${language === 'te' ? 'text-white' : 'text-slate-300'}`}>{languageLabels.te}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
