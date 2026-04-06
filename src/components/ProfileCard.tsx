'use client';

import React from 'react';
import { ContactEntry } from '@/data/portfolioData';

export default function ProfileCard({ content }: { content: ContactEntry[] }) {
  const contacts = content || [];

  const formatValue = (url: string) => {
    if (url.includes('linkedin.com/in/')) return '@' + url.split('linkedin.com/in/')[1].replace('/', '');
    if (url.includes('github.com/')) return '@' + url.split('github.com/')[1].replace('/', '');
    return url;
  };

  const getHref = (contact: ContactEntry) => {
    if (contact.value.startsWith('http')) return contact.value;
    if (contact.label.toUpperCase() === 'MOBILE' || contact.label.toUpperCase() === 'PHONE') return `tel:${contact.value}`;
    return `mailto:${contact.value}`;
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-xs flex flex-col p-2">
      {/* Ticker Header */}
      <div className="flex items-end border-b-2 border-white pb-2 mb-4 space-x-4">
        <h2 className="text-2xl font-bold text-white tracking-widest">DPYK</h2>
        {/* <span className="text-xl text-[#FFB000]">Equity</span>
        <span className="text-lg text-white">DES</span> */}
      </div>

      <div className="flex flex-col space-y-1 mt-2">
        {/* Profile summary static mock data for flavor */}
        <div className="mb-2 font-bold text-gray-300">
          DEEPAK YADAV - Quantative Research & Modeling 
        </div>

        <div className="border-b border-[#333] mb-4" />

        {/* Extracted Contacts */}
        {contacts.map((contact, idx) => (
          <a key={idx} href={getHref(contact)} target="_blank" rel="noreferrer" className="flex justify-between items-end group hover:bg-[#111] -mx-2 px-2 py-1 rounded transition-colors cursor-pointer">
            <span className="text-[#FFB000] font-bold group-hover:text-white transition-colors">{contact.label.toUpperCase()}</span>
            <div className="flex-1 border-b border-dashed border-[#444] mx-3 relative top-[-4px] group-hover:border-[#666] transition-colors" />
            <span className="text-white group-hover:text-[#21FF06] transition-colors font-bold tracking-wide">
              {formatValue(contact.value)}
            </span>
          </a>
        ))}

        {/* Additional Bloomberg mock stats */}
        <div className="flex justify-between items-end mt-6 px-2">
          <span className="text-[#555] font-bold">BASE</span>
          <div className="flex-1 border-b border-dashed border-[#333] mx-3 relative top-[-4px]" />
          <span className="text-gray-400 font-bold">MUMBAI, IN</span>
        </div>
        <div className="flex justify-between items-end mt-1 px-2">
          <span className="text-[#555] font-bold">STATUS</span>
          <div className="flex-1 border-b border-dashed border-[#333] mx-3 relative top-[-4px]" />
          <span className="text-[#21FF06] font-bold">ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
