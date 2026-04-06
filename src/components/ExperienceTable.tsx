'use client';

import React from 'react';
import { ExperienceEntry } from '@/data/portfolioData';

export default function ExperienceTable({ content }: { content: ExperienceEntry[] }) {
  const experiences = content || [];

  // Helper to highlight impact metrics (numbers, percentages) in green
  const formatImpact = (text: string) => {
    const regex = /(\d+%|\d+x|\d+ reduction|\d+ increase|\$\d+[MBK]?|~\d+%?)/gi;
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (part.match(regex)) {
        return <span key={i} className="text-[#21FF06] font-bold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest">
        <div className="w-[18%]">DATE RANGE</div>
        <div className="w-[20%]">SECURITY (ORG)</div>
        <div className="w-[25%]">ROLE</div>
        <div className="flex-1">IMPACT METRICS / DES</div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex border-b border-[#222] pb-2">
            <div className="w-[18%] pr-2 whitespace-nowrap overflow-hidden text-ellipsis">{exp.date.replace('–', '-')}</div>
            <div className="w-[20%] pr-2 font-bold text-white group cursor-pointer hover:underline">
              {exp.ticker}
            </div>
            <div className="w-[25%] pr-2 text-gray-300">{exp.title}</div>
            <div className="flex-1 pr-2 whitespace-pre-wrap leading-tight">
              {exp.bullets.map((b, i) => (
                <div key={i} className="mb-1 block">- {formatImpact(b)}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
