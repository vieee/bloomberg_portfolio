'use client';

import React from 'react';
import { ContactEntry } from '@/data/portfolioData';

export default function ProfileCard({ content }: { content: ContactEntry[] }) {
  const contacts = content || [];

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col p-2">
      {/* Ticker Header */}
      <div className="flex items-end border-b-2 border-white pb-2 mb-4 space-x-4">
        <h1 className="text-2xl font-bold text-white tracking-widest">DPYK</h1>
        <span className="text-xl text-[#FFB000]">Equity</span>
        <span className="text-lg text-white">DES</span>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
         {/* Profile summary static mock data for flavor */}
         <div className="col-span-2 mb-2 font-bold text-gray-300">
           DEEPAK YADAV - QUANTITATIVE MODELING & ENGINEERING
         </div>
         
         <div className="col-span-2 border-b border-[#333] mb-2" />

         {/* Extracted Contacts */}
         {contacts.map((contact, idx) => (
           <div key={idx} className="flex justify-between items-center group">
             <span className="text-[var(--text-muted)] font-bold">{contact.label.toUpperCase()}</span>
             <span className="text-gray-400">.......................</span>
             <a href={contact.value.startsWith('http') ? contact.value : `mailto:${contact.value}`} target="_blank" rel="noreferrer" className="text-white hover:text-[#21FF06] truncate w-1/2 text-right">
               {contact.value.replace('mailto:', '')}
             </a>
           </div>
         ))}
         
         {/* Additional Bloomberg mock stats */}
         <div className="flex justify-between items-center mt-4">
            <span className="text-[var(--text-muted)] font-bold">BASE</span>
            <span className="text-gray-400">.......................</span>
            <span className="text-white text-right">MUMBAI, IN</span>
         </div>
         <div className="flex justify-between items-center">
            <span className="text-[var(--text-muted)] font-bold">STATUS</span>
            <span className="text-gray-400">.......................</span>
            <span className="text-[#21FF06] font-bold text-right">ACTIVE</span>
         </div>
      </div>
    </div>
  );
}
