import React, { useState } from 'react';
import { Tab } from './types';
import { ComingSoon } from './components/ComingSoon';
import { Credits } from './components/Credits';
import { Rocket, Users } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  return (
    <div className="relative w-full h-[100dvh] flex flex-col bg-slate-950 font-sans text-slate-50 overflow-hidden supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
      {/* Background Decor - Absolute position */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-indigo-600/10 rounded-full blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-purple-600/10 rounded-full blur-[80px] opacity-40"></div>
      </div>

      {/* App Header */}
      <header className="relative z-20 flex-none h-14 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md flex items-center justify-center px-4 shadow-sm pt-[env(safe-area-inset-top)]">
        <span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
           <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
            <Rocket className="w-3 h-3 text-white" />
          </div>
          Velox
        </span>
      </header>

      {/* Main Content - Scrollable */}
      <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="min-h-full w-full px-4 py-6 pb-24 max-w-lg mx-auto flex flex-col justify-center">
          {activeTab === Tab.HOME ? <ComingSoon /> : <Credits />}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="relative z-20 flex-none h-20 pb-[env(safe-area-inset-bottom)] border-t border-slate-800/60 bg-slate-950/90 backdrop-blur-xl flex justify-around items-center px-2">
        <button
          onClick={() => setActiveTab(Tab.HOME)}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
            activeTab === Tab.HOME ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${activeTab === Tab.HOME ? 'bg-indigo-500/10' : 'bg-transparent'}`}>
            <Rocket className={`w-6 h-6 ${activeTab === Tab.HOME ? 'fill-current' : ''}`} />
          </div>
          <span className="text-[10px] font-medium tracking-wide">Waitlist</span>
        </button>

        <button
          onClick={() => setActiveTab(Tab.CREDITS)}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
            activeTab === Tab.CREDITS ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${activeTab === Tab.CREDITS ? 'bg-indigo-500/10' : 'bg-transparent'}`}>
            <Users className={`w-6 h-6 ${activeTab === Tab.CREDITS ? 'fill-current' : ''}`} />
          </div>
          <span className="text-[10px] font-medium tracking-wide">Credits</span>
        </button>
      </nav>
    </div>
  );
};

export default App;