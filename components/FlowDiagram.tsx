
import React from 'react';

interface FlowDiagramProps {
  title: string;
  steps: string[];
}

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


export const FlowDiagram: React.FC<FlowDiagramProps> = ({ steps }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center">
                <span className="text-cyan-400 font-bold text-xl mr-3">{index + 1}</span>
                <span className="text-slate-300">{step}</span>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block text-slate-600 transform md:rotate-0 rotate-90">
                <ArrowRightIcon/>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
