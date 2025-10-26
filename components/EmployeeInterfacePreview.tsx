
import React, { useState } from 'react';
import { Icons } from '../constants/icons';

type Screen = 'home' | 'browse' | 'schedule' | 'profile';

const HomeScreen = ({ content }) => (
  <div className="p-4 text-white space-y-5">
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
    </header>
    
    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-lg text-center shadow-lg">
        <p className="text-sm text-blue-100">{content.earnings.title}</p>
        <p className="text-4xl font-bold text-white mt-1">{content.earnings.amount}</p>
    </div>
    
    <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2 flex items-center gap-2"><Icons.Calendar className="w-5 h-5 text-cyan-400" /> {content.upcomingJob.title}</h3>
        <div className="border-l-2 border-cyan-500 pl-3">
            <p className="font-semibold">{content.upcomingJob.job}</p>
            <p className="text-sm text-slate-400">{content.upcomingJob.location}</p>
        </div>
        <button className="w-full text-center mt-3 text-cyan-400 font-semibold text-sm hover:underline">{content.upcomingJob.viewDetails}</button>
    </div>
    
    <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="font-bold mb-3">{content.invites.title}</h3>
        <div className="space-y-3">
            <div className="bg-slate-700/50 p-3 rounded-lg">
                <p className="text-sm font-semibold">{content.invites.invite1}</p>
                <div className="flex gap-2 mt-2">
                    <button className="w-full bg-green-500 text-white text-xs font-bold py-1.5 rounded-md hover:bg-green-400">{content.accept}</button>
                    <button className="w-full bg-slate-600 text-slate-300 text-xs font-bold py-1.5 rounded-md hover:bg-slate-500">{content.decline}</button>
                </div>
            </div>
             <div className="bg-slate-700/50 p-3 rounded-lg">
                <p className="text-sm font-semibold">{content.invites.invite2}</p>
                 <div className="flex gap-2 mt-2">
                    <button className="w-full bg-green-500 text-white text-xs font-bold py-1.5 rounded-md hover:bg-green-400">{content.accept}</button>
                    <button className="w-full bg-slate-600 text-slate-300 text-xs font-bold py-1.5 rounded-md hover:bg-slate-500">{content.decline}</button>
                </div>
            </div>
        </div>
    </div>
  </div>
);

const BrowseScreen = ({ content }) => (
  <div className="p-4 text-white">
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white">
            <Icons.Map className="w-5 h-5" />
            {content.mapView}
        </button>
    </div>

    <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
        {Object.values(content.filters).map((filter: string, index: number) => (
             <button key={index} className="flex-shrink-0 bg-slate-700 text-sm py-2 px-4 rounded-full hover:bg-slate-600 transition-colors">
                {filter}
            </button>
        ))}
    </div>

    <div className="space-y-3">
        {content.jobs.map((job, index) => (
            <div key={index} className="bg-slate-800 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-1"><Icons.MapPin className="w-3 h-3"/>{job.location}</p>
                    </div>
                    <p className="text-lg font-bold text-cyan-400">{job.pay}</p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-xs text-slate-400">{job.distance}</p>
                    <button className="bg-cyan-500 text-slate-900 text-xs font-bold py-1.5 px-4 rounded-full hover:bg-cyan-400 transition-colors">
                        {content.apply}
                    </button>
                </div>
            </div>
        ))}
    </div>
  </div>
);

const ScheduleScreen = ({ content }) => (
  <div className="p-4 text-white">
    <h1 className="text-2xl font-bold mb-6">{content.title}</h1>
    <div className="space-y-6">
      <div>
        <h2 className="font-semibold text-slate-300 mb-3">{content.today}</h2>
        <div className="space-y-3">
          {content.jobs.map((job, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-16 text-right text-sm text-slate-400">
                  <p>{job.time}</p>
                  <p className="text-xs">({job.duration})</p>
              </div>
              <div className={`flex-1 bg-slate-800 p-3 rounded-lg border-l-4 ${job.color === 'green' ? 'border-green-500' : 'border-cyan-500'}`}>
                <p className="font-semibold">{job.title}</p>
                <p className={`text-xs ${job.color === 'green' ? 'text-green-400' : 'text-cyan-400'}`}>{job.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-slate-300 mb-3">{content.tomorrow}</h2>
         <div className="space-y-3">
          {content.tomorrowJobs.map((job, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-16 text-right text-sm text-slate-400">
                  <p>{job.time}</p>
                  <p className="text-xs">({job.duration})</p>
              </div>
              <div className={`flex-1 bg-slate-800 p-3 rounded-lg border-l-4 border-cyan-500`}>
                <p className="font-semibold">{job.title}</p>
                <p className="text-xs text-cyan-400">{job.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProfileScreen = () => (
    <div className="p-4 text-white flex items-center justify-center h-full">
        <p className="text-slate-400">Profile Screen (WIP)</p>
    </div>
);

export const EmployeeInterfacePreview: React.FC<{ content: any }> = ({ content }) => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const screens = {
    home: <HomeScreen content={content.homeScreen} />,
    browse: <BrowseScreen content={content.browseScreen} />,
    schedule: <ScheduleScreen content={content.scheduleScreen} />,
    profile: <ProfileScreen />,
  };
  
  const navItems = [
    { id: 'home', icon: Icons.Home, label: content.screens.home },
    { id: 'browse', icon: Icons.Search, label: content.screens.browse },
    { id: 'schedule', icon: Icons.Calendar, label: content.screens.schedule },
    { id: 'profile', icon: Icons.User, label: content.screens.profile },
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
                        className="group flex flex-col items-center justify-center text-center w-1/4 py-2 rounded-lg transition-colors hover:bg-slate-700/50"
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
