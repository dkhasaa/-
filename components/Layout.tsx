
import React from 'react';
import { Section } from '../types';
import { 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target, 
  FileText, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';

interface LayoutProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeSection, onSectionChange, children }) => {
  const menuItems = [
    { id: Section.DIAGNOSIS, label: 'Үндсэн Оношлогоо', icon: <BarChart3 className="w-5 h-5" /> },
    { id: Section.HUMAN_RESOURCES, label: 'Оюуны Нөөц', icon: <Users className="w-5 h-5" /> },
    { id: Section.STRATEGY, label: 'Дэмжих Стратеги', icon: <Target className="w-5 h-5" /> },
    { id: Section.INNOVATION, label: 'Инновацийн Экосистем', icon: <Lightbulb className="w-5 h-5" /> },
    { id: Section.CONCLUSION, label: 'Бодлогын Сонголт', icon: <FileText className="w-5 h-5" /> },
    { id: Section.AI_ANALYST, label: 'Бодлогын Шинжээч AI', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full hidden lg:block overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">M</div>
            <h1 className="text-sm font-bold uppercase tracking-wider text-slate-300">Policy Dashboard</h1>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Status</p>
            <p className="text-xs text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Live Policy Environment
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-sm">
          <h2 className="font-bold text-slate-800">HE Reform</h2>
          <select 
            className="bg-slate-100 p-2 rounded text-sm"
            value={activeSection}
            onChange={(e) => onSectionChange(e.target.value as Section)}
          >
            {menuItems.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
        </div>

        {children}
      </main>
    </div>
  );
};

export default Layout;
