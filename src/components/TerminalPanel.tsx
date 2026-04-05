'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalPanelProps {
  data: Record<string, string>;
}

export default function TerminalPanel({ data }: TerminalPanelProps) {
  const [logs, setLogs] = useState<string[]>(['BLOOMBERG TERMINAL INITIALIZED v1.0.0', 'Type a command like: experience, education, skills, clear']);
  const [inputVal, setInputVal] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setLogs((prev) => [...prev, `> ${cmd}`]);

    if (trimmed === 'clear') {
      setLogs([]);
      return;
    }

    if (trimmed === 'help') {
      setLogs(prev => [...prev, 'Available commands: experience, education, skills, achievements, contacts, research, clear']);
      return;
    }

    // Attempt to map command to data
    const keys = Object.keys(data);
    const matchedKey = keys.find(k => k === trimmed || (k === 'research' && trimmed === 'research_work'));
    
    if (matchedKey && data[matchedKey]) {
      const targetData = data[matchedKey];
      // Format the data depending on whether it's an array of strings or objects
      let newLogs: string[] = [];
      if (Array.isArray(targetData)) {
         targetData.forEach((item) => {
           if (typeof item === 'string') {
             newLogs.push(item);
           } else {
             newLogs.push(JSON.stringify(item, null, 2));
           }
         });
      } else {
         newLogs.push(JSON.stringify(targetData, null, 2));
      }
      
      // Split by newlines if JSON.stringify created multi-line strings
      const finalLogs = newLogs.flatMap(log => log.split('\n'));
      setLogs(prev => [...prev, ...finalLogs, '']);
    } else {
      setLogs(prev => [...prev, `Command not recognized: ${cmd}`]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="h-full w-full font-mono text-[var(--text-primary)] text-sm flex flex-col">
      <div className="flex-1 overflow-y-auto whitespace-pre-wrap break-words pb-4">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex mt-2 items-center border-t border-[var(--border-color)] pt-2 relative">
        <span className="mr-2">&gt;</span>
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none outline-none text-[var(--text-primary)] font-mono flex-1 uppercase"
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  );
}
