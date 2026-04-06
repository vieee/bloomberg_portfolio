'use client';

import React from 'react';
import { ResearchEntry } from '@/data/portfolioData';

export default function ResearchTable({ content }: { content: ResearchEntry[] }) {
  const research = content || [];

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col p-1">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest">
        <div className="w-[15%]">CONF</div>
        <div className="flex-1">PUBLICATION (ASSET)</div>
        <div className="w-[10%] text-right">LINK</div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {research.map((pub, idx) => (
          <div key={idx} className="flex border-b border-[#222] pb-2 items-center hover:bg-[#111] transition-colors group">
            <div className="w-[15%] pr-2 font-bold text-[#FFB000]">{pub.conference}</div>
            <div className="flex-1 pr-2 text-gray-300 leading-tight group-hover:text-white transition-colors">{pub.title}</div>
            <div className="w-[10%] text-right">
              {pub.link ? (
                <a href={pub.link} target="_blank" rel="noreferrer" className="text-[#21FF06] hover:underline uppercase text-[10px]">
                  [GO]
                </a>
              ) : (
                <span className="text-gray-500">N/A</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
