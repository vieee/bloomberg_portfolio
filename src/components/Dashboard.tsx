'use client';

import React, { useState } from 'react';
import TerminalPanel from './TerminalPanel'; // Trigger TS server sync
import ContentPanel from './ContentPanel'; // Trigger TS server sync
import ExperienceTable from './ExperienceTable';
import EducationTable from './EducationTable';
import SkillsChart from './SkillsChart';
import NewsTicker from './NewsTicker';
import ResearchTable from './ResearchTable';
import ProfileCard from './ProfileCard';

type GridState = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
};

type PanelId = keyof GridState;

interface DashboardProps {
  data: any;
}

export default function Dashboard({ data }: DashboardProps) {
  const [maximizedPanel, setMaximizedPanel] = useState<PanelId | null>(null);
  const [gridState, setGridState] = useState<GridState>({
    q1: 'Terminal',
    q2: 'Experience',
    q3: 'Skills',
    q4: 'Contacts',
  });

  const availableModules = ['Terminal', 'Experience', 'Education', 'Skills', 'Contacts', 'Research', 'Achievements'];

  // Toggle maximize
  const toggleMaximize = (panelId: PanelId) => {
    if (maximizedPanel === panelId) {
      setMaximizedPanel(null);
    } else {
      setMaximizedPanel(panelId);
    }
  };

  // Change module for a quadrant
  const handleModuleChange = (panelId: PanelId, moduleName: string) => {
    setGridState((prev) => ({ ...prev, [panelId]: moduleName }));
  };

  // Render a specific quadrant
  const renderQuadrant = (panelId: PanelId) => {
    const currentModule = gridState[panelId];
    const isMaximized = maximizedPanel === panelId;
    
    // Hide panel if another panel is maximized
    if (maximizedPanel !== null && !isMaximized) return null;

    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <div className={`border-[1px] border-[var(--border-color)] bg-[var(--panel-bg)] flex flex-col ${isMaximized ? 'fixed inset-0 z-50' : 'h-full'}`}>
        <div className="flex justify-between items-center bg-[var(--border-color)] px-2 py-1 text-xs select-none">
          <div className="flex items-center space-x-2">
            <span>[{panelId.toUpperCase()}]</span>
            <select 
              value={currentModule} 
              onChange={(e) => handleModuleChange(panelId, e.target.value)}
              className="bg-[var(--text-primary)] text-black font-bold outline-none border border-[var(--border-color)] cursor-pointer px-1 ml-1"
            >
              {availableModules.map(mod => (
                <option key={mod} value={mod} className="bg-[var(--text-primary)] text-black">
                  {mod}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => toggleMaximize(panelId)} className="hover:text-white">
            {isMaximized ? '[-]' : '[+]'}
          </button>
        </div>
        <div className="flex-1 overflow-auto p-2 flex flex-col">
          {children}
        </div>
      </div>
    );

    let Content = null;
    if (currentModule === 'Terminal') {
      Content = <TerminalPanel data={data} />;
    } else if (currentModule === 'Experience') {
      Content = <ExperienceTable content={data.experience || ''} />;
    } else if (currentModule === 'Education') {
      Content = <EducationTable content={data.education || []} />;
    } else if (currentModule === 'Skills') {
      Content = <SkillsChart content={data.skills || ''} />;
    } else if (currentModule === 'Contacts') {
      Content = <ProfileCard content={data.contacts || ''} />;
    } else if (currentModule === 'Achievements') {
      Content = <NewsTicker content={data.achievements || []} type="ACHV" />;
    } else if (currentModule === 'Research') {
      Content = <ResearchTable content={data.research || []} />;
    } else {
      const dataKey = currentModule.toLowerCase();
      Content = <ContentPanel title={currentModule} content={data[dataKey] || 'No data found.'} />;
    }

    return <Wrapper key={panelId}>{Content}</Wrapper>;
  };

  return (
    <div className={`w-full h-screen p-1 ${maximizedPanel ? '' : 'grid grid-cols-2 grid-rows-2 gap-1'}`}>
      {renderQuadrant('q1')}
      {renderQuadrant('q2')}
      {renderQuadrant('q3')}
      {renderQuadrant('q4')}
    </div>
  );
}
