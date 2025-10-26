
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { PresentationSection } from './components/PresentationSection';
import { ComparisonTable } from './components/ComparisonTable';
import { FlowDiagram } from './components/FlowDiagram';
import { contentData } from './constants/content';
import type { Language } from './types';
import { EmployerInterfacePreview } from './components/EmployerInterfacePreview';
import { EmployeeInterfacePreview } from './components/EmployeeInterfacePreview';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'te' : 'en'));
  };

  const currentContent = useMemo(() => contentData[language], [language]);

  const renderSectionContent = (section: any) => {
    switch (section.id) {
      case 'howItWorks':
        return <ComparisonTable data={section.content} />;
      case 'employerFlow':
      case 'employeeFlow':
        return <FlowDiagram title={section.title} steps={section.content} />;
      case 'interfacePreview':
        return <EmployerInterfacePreview content={section.content} />;
      case 'employeeInterfacePreview':
        return <EmployeeInterfacePreview content={section.content} />;
      default:
        return section.content;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Header 
        title={currentContent.header.title} 
        language={language} 
        toggleLanguage={toggleLanguage} 
        languageLabels={currentContent.header.languageToggle}
      />
      <main className="container mx-auto p-4 md:p-8 space-y-12 md:space-y-20">
        {currentContent.sections.map((section) => (
          <PresentationSection 
            key={section.id} 
            title={section.title} 
            icon={section.icon}
            sectionId={section.id}
          >
            {renderSectionContent(section)}
          </PresentationSection>
        ))}
      </main>
      <footer className="text-center p-8 text-slate-500 border-t border-slate-800 mt-12">
        <p>&copy; 2024 One Day Job. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
