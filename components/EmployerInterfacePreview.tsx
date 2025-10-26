
import React, { useState } from 'react';
import { Icons } from '../constants/icons';

type Screen = 'home' | 'postJob' | 'findWorkers';

const HomeScreen = ({ content }) => (
  <div className="p-4 text-white">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
    </header>
    
    <div className="grid grid-cols-3 gap-3 text-center mb-6">
      <button className="bg-cyan-500 text-slate-900 font-bold py-3 px-2 rounded-lg shadow-lg hover:bg-cyan-400 transition-colors">
        {content.postJob}
      </button>
      <button className="bg-slate-700 py-3 px-2 rounded-lg hover:bg-slate-600 transition-colors">
        {content.myJobs}
      </button>
      <button className="bg-slate-700 py-3 px-2 rounded-lg hover:bg-slate-600 transition-colors">
        {content.messages}
      </button>
    </div>

    <div className="bg-slate-800 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-2xl font-bold text-green-400">2</p>
          <p className="text-xs text-slate-400">{content.stats.active}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">15</p>
          <p className="text-xs text-slate-400">{content.stats.completed}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-yellow-400">1</p>
          <p className="text-xs text-slate-400">{content.stats.pending}</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2">{content.tips.title}</h3>
        <p className="text-sm text-slate-300">{content.tips.tip1}</p>
    </div>
  </div>
);

const PostJobScreen = ({ content }) => {
    const jobTypes = [
        { key: 'cleaning', icon: <Icons.Cleaning className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'delivery', icon: <Icons.Delivery className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'repairs', icon: <Icons.Repairs className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'cooking', icon: <Icons.Cooking className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'event', icon: <Icons.EventHelp className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'tutor', icon: <Icons.Tutoring className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'packing', icon: <Icons.Packing className="w-8 h-8 mx-auto mb-2" /> },
        { key: 'data', icon: <Icons.DataEntry className="w-8 h-8 mx-auto mb-2" /> },
    ];

    return (
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
        
        <div className="space-y-4 mb-6">
            <h2 className="text-lg font-semibold text-cyan-400">{content.step1}</h2>
            <input type="text" placeholder={content.jobTitle} className="w-full bg-slate-800 p-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="text" placeholder={content.location} className="w-full bg-slate-800 p-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="text" placeholder={content.pay} className="w-full bg-slate-800 p-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>
        
        <div className="space-y-4 mb-8">
            <h2 className="text-lg font-semibold text-cyan-400">{content.step2}</h2>
            <div className="grid grid-cols-4 gap-3 text-center">
                {jobTypes.map(job => (
                    <div key={job.key} className="bg-slate-800 p-3 rounded-lg text-slate-300 hover:bg-slate-700 cursor-pointer">
                        {job.icon}
                        <span className="text-xs">{content.jobTypes[job.key]}</span>
                    </div>
                ))}
            </div>
        </div>

        <button className="w-full bg-cyan-500 text-slate-900 font-bold py-3 rounded-lg shadow-lg hover:bg-cyan-400 transition-colors">
          {content.postButton}
        </button>
      </div>
    );
};

const FindWorkersScreen = ({ content }) => (
  <div className="p-4 text-white">
    <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
    <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
        {Object.values(content.filters).map((filter: string, index: number) => (
             <button key={index} className="flex-shrink-0 bg-slate-700 text-sm py-2 px-4 rounded-full hover:bg-slate-600 transition-colors flex items-center gap-1">
                {filter}
                <Icons.Filter className="w-4 h-4" />
            </button>
        ))}
    </div>

    <div className="space-y-3">
        {content.workers.map((worker, index) => (
            <div key={index} className="bg-slate-800 p-3 rounded-lg flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-700 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold">{worker.name}</h3>
                            <p className="text-xs text-slate-400">{worker.skills}</p>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Icons.Star className="w-4 h-4" />
                            <span className="font-bold text-sm">{worker.rating}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-sm font-semibold text-cyan-400">{worker.rate}</p>
                         <button className="bg-cyan-500 text-slate-900 text-xs font-bold py-1 px-3 rounded-full hover:bg-cyan-400 transition-colors">
                            {content.bookNow}
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  </div>
);


export const EmployerInterfacePreview: React.FC<{ content: any }> = ({ content }) => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const screens = {
    home: <HomeScreen content={content.homeScreen} />,
    postJob: <PostJobScreen content={content.postJobScreen} />,
    findWorkers: <FindWorkersScreen content={content.findWorkersScreen} />,
  };
  
  const navItems = [
    { id: 'home', icon: Icons.Home, label: content.screens.home },
    { id: 'postJob', icon: Icons.PlusCircle, label: content.screens.postJob },
    { id: 'findWorkers', icon: Icons.Search, label: content.screens.findWorkers },
  ];

  return (
    <div className="mt-6">
      <p className="text-center text-slate-400 italic mb-6">{content.tagline}</p>
      <div className="max-w-sm mx-auto bg-slate-800 rounded-[2.5rem] p-2 border-4 border-slate-700 shadow-2xl">
        <div className="w-full h-[640px] bg-slate-900 rounded-[2rem] overflow-hidden relative flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 z-10 flex justify-center items-end">
                <div className="w-32 h-4 bg-slate-800 rounded-b-lg"></div>
            </div>
            <div className="flex-1 overflow-y-auto pt-6 pb-20 scrollbar-hide">
              {screens[activeScreen]}
            </div>

          {/* Navigation Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700 p-1 flex justify-around">
            {navItems.map(item => {
                const isActive = activeScreen === item.id;
                const Icon = item.icon;
                const iconClasses = `w-6 h-6 mb-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'}`;
                return (
                    <button 
                        key={item.id} 
                        onClick={() => setActiveScreen(item.id as Screen)} 
                        className="group flex flex-col items-center justify-center text-center w-1/3 py-2 rounded-lg transition-colors hover:bg-slate-700/50"
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <Icon className={iconClasses} />
                        <span className={`text-xs transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'}`}>{item.label}</span>
                    </button>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
