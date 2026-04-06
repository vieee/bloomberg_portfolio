'use client';

import React from 'react';
import { EducationEntry } from '@/data/portfolioData';

export default function EducationTable({ content }: { content: EducationEntry[] }) {
  const educations = content || [];

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest">
        <div className="w-1/4">DATE RANGE</div>
        <div className="w-1/3">INSTITUTION (ORG)</div>
        <div className="w-1/4">DEGREE</div>
        <div className="w-1/6 text-right">GRADE</div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {educations.map((edu, idx) => (
          <div key={idx} className="flex border-b border-[#222] pb-2 items-center hover:bg-[#111] transition-colors">
            <div className="w-1/4 pr-2 whitespace-nowrap overflow-hidden text-ellipsis text-gray-400">{edu.date.replace('–', '-')}</div>
            <div className="w-1/3 pr-2 font-bold text-white uppercase">{edu.institution}</div>
            <div className="w-1/4 pr-2 text-gray-300 truncate">{edu.degree}</div>
            <div className="w-1/6 text-right font-bold text-[#21FF06]">{edu.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
