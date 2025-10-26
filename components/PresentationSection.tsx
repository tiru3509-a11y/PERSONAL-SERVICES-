
import React from 'react';

interface PresentationSectionProps {
  icon: React.ReactNode;
  title: string;
  sectionId: string;
  children: React.ReactNode;
}

export const PresentationSection: React.FC<PresentationSectionProps> = ({ icon, title, children, sectionId }) => {
  return (
    <section id={sectionId} className="scroll-mt-20">
      <div className="flex items-start space-x-4 md:space-x-6">
        <div className="flex-shrink-0 bg-slate-800 rounded-full p-3">{icon}</div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <div className="text-lg leading-relaxed text-slate-300">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
