
import React, { useState } from 'react';
import Layout from './components/Layout';
import { Section } from './types';
import { APP_TITLE, SUBTITLE } from './constants';
import { 
  DiagnosisSection, 
  HumanResourcesSection, 
  StrategySection, 
  InnovationSection, 
  ConclusionSection,
  AnalystSection
} from './components/DashboardSections';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.DIAGNOSIS);

  const renderContent = () => {
    switch (activeSection) {
      case Section.DIAGNOSIS:
        return <DiagnosisSection />;
      case Section.HUMAN_RESOURCES:
        return <HumanResourcesSection />;
      case Section.STRATEGY:
        return <StrategySection />;
      case Section.INNOVATION:
        return <InnovationSection />;
      case Section.CONCLUSION:
        return <ConclusionSection />;
      case Section.AI_ANALYST:
        return <AnalystSection />;
      default:
        return <DiagnosisSection />;
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      <header className="mb-10 animate-in slide-in-from-top duration-700">
        <div className="flex items-center space-x-2 text-blue-600 mb-2">
          <div className="w-8 h-1 bg-blue-600 rounded"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Policy Framework 2024-2030</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          {APP_TITLE}
        </h1>
        <p className="mt-2 text-slate-500 text-lg">
          {SUBTITLE}
        </p>
      </header>

      {renderContent()}

      <footer className="mt-20 py-8 border-t border-slate-200 text-slate-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Монгол Улсын Их Хурал - Бодлогын судалгааны хүрээлэн</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Нууцлалын бодлого</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Ашиглах нөхцөл</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Холбоо барих</a>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
