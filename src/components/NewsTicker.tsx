'use client';

import React from 'react';

export default function NewsTicker({ content, type }: { content: any[], type: 'ACHV' | 'RES' }) {
  const items = content || [];

  // Generate mock Bloomberg timestamps for realism if date is missing
  const generateTimestamp = (index: number) => {
    const date = new Date(Date.now() - index * 86400000 * 14.5); // spread by weeks
    return `${date.toISOString().split('T')[0]} ${date.toISOString().split('T')[1].substring(0, 8)}`;
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col overflow-hidden relative">
      <div className="flex border-b border-[var(--border-color)] pb-1 mb-2 uppercase font-bold text-[var(--text-muted)] tracking-widest bg-[var(--panel-bg)] z-10">
        <div className="w-1/6">DATE / TIME</div>
        <div className="w-[35%]">SRC / ORG</div>
        <div className="flex-1">HEADLINE</div>
      </div>

      {/* Static List Wrapper */}
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col">
          {items.map((item, idx) => (
            <div key={idx} className="flex border-b border-[#222] py-2 hover:bg-[#111] cursor-pointer group" onClick={() => item.link && window.open(item.link, '_blank')}>
              <div className="w-1/6 pr-2 text-gray-400 group-hover:text-white transition-colors">
                {item.date || generateTimestamp(idx)}
              </div>
              <div className="w-[35%] pr-2 font-bold text-[#FFB000]">
                {(item.organization || item.conference || type).toUpperCase()}
              </div>
              <div className="flex-1 pr-2 text-gray-200 group-hover:text-[#21FF06] transition-colors pr-4 relative">
                {typeof item === 'string' ? item : item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
