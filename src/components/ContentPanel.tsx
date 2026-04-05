'use client';

import React from 'react';

interface ContentPanelProps {
  title: string;
  content: string;
}

export default function ContentPanel({ title, content }: ContentPanelProps) {
  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-sm whitespace-pre-wrap">
      <div className="mb-2 text-md font-bold underline uppercase">{title}</div>
      <div>{content}</div>
    </div>
  );
}
