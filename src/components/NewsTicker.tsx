'use client';

import React from 'react';
import { parseList } from '@/utils/parser';

export default function NewsTicker({ content, type }: { content: string, type: 'ACHV' | 'RES' }) {
  const items = parseList(content);

  // Generate mock Bloomberg timestamps for realism
  const generateTimestamp = (index: number) => {
     const date = new Date(Date.now() - index * 86400000 * 14.5); // spread by weeks
     return `${date.toISOString().split('T')[0]} ${date.toISOString().split('T')[1].substring(0,8)}`;
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col overflow-hidden relative">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest bg-[var(--panel-bg)] z-10">
        <div className="w-1/4">DATE / TIME</div>
        <div className="w-1/6">SRC</div>
        <div className="flex-1">HEADLINE</div>
      </div>
      
      {/* Ticker Animation Wrapper */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 animate-ticker flex flex-col">
          {items.map((item, idx) => (
            <div key={idx} className="flex border-b border-[#222] py-2 hover:bg-[#111] cursor-pointer group">
               <div className="w-1/4 pr-2 text-gray-400 group-hover:text-white transition-colors">{generateTimestamp(idx)}</div>
               <div className="w-1/6 pr-2 font-bold text-[#FFB000]">{type}</div>
               <div className="flex-1 pr-2 truncate text-gray-200 group-hover:text-[#21FF06] transition-colors">{item}</div>
            </div>
          ))}
          {/* Duplicate list to create a seamless infinite scroll loop */}
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex border-b border-[#222] py-2 hover:bg-[#111] cursor-pointer group">
               <div className="w-1/4 pr-2 text-gray-400 group-hover:text-white transition-colors">{generateTimestamp(idx)}</div>
               <div className="w-1/6 pr-2 font-bold text-[#FFB000]">{type}</div>
               <div className="flex-1 pr-2 truncate text-gray-200 group-hover:text-[#21FF06] transition-colors">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-ticker {
          animation: slideUp 20s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } 
        }
      `}</style>
    </div>
  );
}
