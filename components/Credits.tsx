import React from 'react';
import { CreditEntry } from '../types';
import { Heart } from 'lucide-react';

const TEAM: CreditEntry[] = [
  { role: 'Developer', name: 'Renato Aranda', avatarUrl: 'https://picsum.photos/100/100?random=1' }
];

export const Credits: React.FC = () => {
  return (
    <div className="w-full animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Credits</h2>
        <p className="text-slate-400 text-sm">
          The team behind the project.
        </p>
      </div>

      <div className="flex flex-col space-y-3">
        {TEAM.map((member, idx) => (
          <div 
            key={idx}
            className="flex items-center p-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl active:bg-slate-800/80 transition-colors"
          >
            <img 
              src={member.avatarUrl} 
              alt={member.name} 
              className="w-12 h-12 rounded-full border border-slate-700 object-cover bg-slate-800"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-base font-medium text-slate-100">
                {member.name}
              </h3>
              <p className="text-xs text-indigo-400 font-medium uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="flex items-center justify-center text-slate-600 text-xs">
          Made with <Heart className="w-3 h-3 text-red-500 mx-1 fill-current" /> in November 2025
        </p>
      </div>
    </div>
  );
};