'use client';

import React from 'react';
import { SkillEntry } from '@/data/portfolioData';

export default function SkillsChart({ content }: { content: SkillEntry[] }) {
  const allSkills = (content || []).flatMap(cat => cat.skills);

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col pt-1 pl-1">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-3 uppercase font-bold text-[var(--text-muted)] tracking-widest justify-between text-[10px]">
        <span>ASSET VOL. (BAR CHART)</span>
        <span className="text-[#21FF06]">LIVE</span>
      </div>

      <div className="flex-1 flex flex-col pr-2">
        {/* Graph area */}
        <div className="flex-1 flex border-l border-b border-[var(--border-color)] relative ml-6">

          {/* Y-axis markers */}
          <div className="absolute -left-7 top-0 text-[10px] text-[var(--text-muted)] w-6 text-right">100</div>
          <div className="absolute -left-7 top-1/4 text-[10px] text-[var(--text-muted)] w-6 text-right">75</div>
          <div className="absolute -left-7 top-2/4 text-[10px] text-[var(--text-muted)] w-6 text-right">50</div>
          <div className="absolute -left-7 top-3/4 text-[10px] text-[var(--text-muted)] w-6 text-right">25</div>

          {/* Grid lines */}
          <div className="absolute top-1/4 w-full border-t border-dashed border-[#222] z-0" />
          <div className="absolute top-2/4 w-full border-t border-dashed border-[#222] z-0" />
          <div className="absolute top-3/4 w-full border-t border-dashed border-[#222] z-0" />

          <div className="w-full h-full flex items-end justify-around z-10 px-1 pb-[1px]">
            {allSkills.map((skill, j) => {
              const vol = skill.proficiency;
              const isHigh = vol >= 85;

              return (
                <div key={j} className="h-full flex flex-col justify-end items-center relative w-full group">
                  {/* Hover Value */}
                  <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center z-20 pointer-events-none">
                    <span className="bg-[#111] text-white text-[10px] px-1 border border-[var(--border-color)] whitespace-nowrap">
                      {vol}
                    </span>
                  </div>

                  {/* The Bar */}
                  <div
                    className={`w-[70%] min-w-[6px] max-w-[14px] ${isHigh ? 'bg-[#21FF06]' : 'bg-[var(--text-primary)]'} group-hover:brightness-150 transition-all cursor-pointer`}
                    style={{ height: `${Math.max(vol, 5)}%` }}
                  />

                  {/* The horizontal label */}
                  <div className="absolute top-full mt-2 w-full flex justify-center text-center pt-2">
                    <span
                      className={`text-[8px] leading-tight break-all px-[1px] pt-2 tracking-tighter ${isHigh ? 'text-gray-300 font-bold' : 'text-[#888]'}`}
                    >
                      {skill.name.trim().toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom padding for labels to fit within container */}
        <div className="h-24 w-full" />
      </div>
    </div>
  );
}
