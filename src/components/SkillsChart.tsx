'use client';

import React from 'react';
import { SkillEntry } from '@/data/portfolioData';

export default function SkillsChart({ content }: { content: SkillEntry[] }) {
  const categories = content || [];

  // Generate a stable "proficiency" level (0-100) based on string hash for visual variety
  const getVolumeLevel = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const val = Math.abs(hash) % 40 + 60; // Returns between 60 and 100
    return val;
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest justify-between">
        <span>ASSET (SKILL)</span>
        <span>VOL. PROFICIENCY</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {categories.map((cat, i) => (
          <div key={i} className="mb-2">
             <div className="text-white bg-[#111] px-1 py-[2px] mb-2 uppercase border-l-2 border-[var(--text-primary)]">{cat.category}</div>
             {cat.skills.map((skill, j) => {
               const vol = getVolumeLevel(skill);
               const isHigh = vol >= 85;
               
               return (
                 <div key={j} className="flex flex-col mb-2">
                   <div className="flex justify-between w-full mb-[2px]">
                     <span className="text-gray-300 w-1/3 truncate pr-2">{skill.toUpperCase()}</span>
                     <span className="text-right w-12">{vol.toFixed(1)}</span>
                   </div>
                   <div className="w-full bg-[#222] h-2 relative flex items-center">
                     <div 
                       className={`h-full ${isHigh ? 'bg-[#21FF06]' : 'bg-[var(--text-primary)]'}`}
                       style={{ width: `${vol}%` }}
                     />
                     {/* Overlay vertical grid lines to mimic financial chart grid */}
                     <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                       {[...Array(10)].map((_, idx) => (
                         <div key={idx} className="h-full border-r border-white" />
                       ))}
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        ))}
      </div>
    </div>
  );
}
