
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { ACTION_PLAN, FUNDING_DATA, DEGREE_LEVELS_DATA } from '../constants';
// Added MessageSquare to the import list from lucide-react
import { AlertCircle, TrendingDown, Users, GraduationCap, ShieldCheck, Globe, Zap, MessageSquare } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export const DiagnosisSection: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
        <div className="bg-red-50 p-3 rounded-xl"><AlertCircle className="text-red-500" /></div>
        <div>
          <h3 className="text-slate-500 text-sm font-medium">Төсвийн хамаарал</h3>
          <p className="text-2xl font-bold text-slate-900">90%</p>
          <p className="text-xs text-red-500 mt-1">Төлбөрөөс хамааралтай</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
        <div className="bg-blue-50 p-3 rounded-xl"><Users className="text-blue-500" /></div>
        <div>
          <h3 className="text-slate-500 text-sm font-medium">Нийт сургууль</h3>
          <p className="text-2xl font-bold text-slate-900">69</p>
          <p className="text-xs text-slate-500 mt-1">Оновчтой болгосны дараа</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
        <div className="bg-amber-50 p-3 rounded-xl"><TrendingDown className="text-amber-500" /></div>
        <div>
          <h3 className="text-slate-500 text-sm font-medium">OECD Дундаж (State)</h3>
          <p className="text-2xl font-bold text-slate-900">73%</p>
          <p className="text-xs text-slate-500 mt-1">Төрийн санхүүжилт</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Санхүүжилтийн загварын зөрүү (Төлбөрийн эзлэх хувь)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={FUNDING_DATA} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-sm text-slate-500 italic">
          * Монгол Улсын төрийн өмчийн сургуулиуд "Survival Mode"-д байна. Энэ нь чанараас илүү тоонд анхаарах гажуудлыг үүсгэж байна.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Суралцагчдын түвшин (%)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DEGREE_LEVELS_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {DEGREE_LEVELS_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="text-sm text-red-700 font-medium">
            Ахисан түвшний суралцагчдын 99% нь "Эчнээ" хэлбэрээр суралцаж буй нь чанартай судалгаа хийх боломжийг хааж байна.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const HumanResourcesSection: React.FC = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-3xl text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">"Brain Drain" буюу Оюуны Алдагдал</h2>
          <p className="text-indigo-100 leading-relaxed mb-6">
            Монгол Улс 22 нас хүртэл нь бэлтгэсэн шилдэг залуусаа гадаадад илгээж, тухайн улсын судалгаа хөгжүүлэлтийг (R&D) 
            хамгийн хямд зардлаар тэтгэж буй "Оюуны экспортлогч" болоод байна. Энэ бол үндэсний аюулгүй байдлын асуудал.
          </p>
          <div className="flex space-x-4">
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
              <span className="text-xs block text-indigo-300">Жилийн зардал (Гадаад)</span>
              <span className="text-lg font-bold">$20,000+ USD</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
              <span className="text-xs block text-indigo-300">Дотоодын нөөц</span>
              <span className="text-lg font-bold">Critical Mass бүрдсэн</span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 opacity-20">
          <Users size={180} />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center space-x-3 mb-6">
          <ShieldCheck className="text-green-500 w-6 h-6" />
          <h3 className="text-xl font-bold">Яагаад Монголдоо гэж?</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-1 shrink-0">1</div>
            <p className="text-slate-600 font-medium">Зардлын хэмнэлт: Гэр бүл болон улсын төсвийн ачааллыг бууруулах.</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-1 shrink-0">2</div>
            <p className="text-slate-600 font-medium">Орон нутгийн асуудал: Утаа, хөрсний бохирдол зэрэг "Local problems"-д "Global solutions" нэвтрүүлэх.</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-1 shrink-0">3</div>
            <p className="text-slate-600 font-medium">Системийн хөгжил: Судалгааны лабораториуд байна, одоо агуулга, системийг засах цаг.</p>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center"><Globe className="mr-2 text-blue-400" /> Боловсролын Экспорт</h3>
        <p className="text-slate-400 text-sm mb-6">Монгол Улс бүс нутгийн судалгааны төв болох боломж:</p>
        <div className="space-y-4">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-bold text-slate-100">EMI Programs</h4>
            <p className="text-xs text-slate-400">Англи хэл дээрх магистр, докторын хөтөлбөрүүд.</p>
          </div>
          <div className="border-l-2 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-100">Визний хөнгөлөлт</h4>
            <p className="text-xs text-slate-400">Олон улсын оюутнуудад зориулсан уян хатан оршин суух журам.</p>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="font-bold text-slate-100">Рейтинг өсгөх</h4>
            <p className="text-xs text-slate-400">Гадаад багш, оюутны тоог нэмэгдүүлснээр олон улсын эрэмбэ сайжирна.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const StrategySection: React.FC = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-slate-800">Нэн Шаардлагатай Арга Хэмжээнүүд</h2>
      <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Priority: High</div>
    </div>
    
    <div className="overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-100">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Арга хэмжээ</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Агуулга</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Хүлээгдэж буй үр дүн</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {ACTION_PLAN.map((item, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">{item.action}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.content}</td>
              <td className="px-6 py-4 text-sm font-medium text-green-600">{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start space-x-4">
      <Zap className="text-amber-500 w-8 h-8 shrink-0" />
      <div>
        <h4 className="font-bold text-amber-900 mb-2">Research Stipend-ийн ач холбогдол</h4>
        <p className="text-amber-800 text-sm">
          Докторын оюутнууд амьдрахын тулд хажуугаар нь ажил хийх биш, судалгааны ажилдаа 100% төвлөрч цалинжих тогтолцоо 
          бол "Research University"-гийн цөм юм. Энэ нь шинжлэх ухааны бүтээмжийг 10 дахин нэмэгдүүлнэ.
        </p>
      </div>
    </div>
  </div>
);

export const InnovationSection: React.FC = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6">"Triple Helix" буюу Алтан Гурвалжин</h3>
          <div className="relative h-64 flex items-center justify-center">
             <div className="w-48 h-48 border-4 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite] absolute"></div>
             <div className="grid grid-cols-1 gap-24 relative">
                <div className="flex justify-center -mb-32">
                  <div className="bg-blue-600 text-white p-6 rounded-full shadow-lg z-10 w-32 h-32 flex items-center justify-center text-center font-bold text-sm">Төр</div>
                </div>
                <div className="flex justify-between space-x-24">
                  <div className="bg-indigo-600 text-white p-6 rounded-full shadow-lg z-10 w-32 h-32 flex items-center justify-center text-center font-bold text-sm">Их Сургууль</div>
                  <div className="bg-emerald-600 text-white p-6 rounded-full shadow-lg z-10 w-32 h-32 flex items-center justify-center text-center font-bold text-sm">Хувийн хэвшил</div>
                </div>
             </div>
          </div>
          <div className="mt-16 text-center text-slate-500 text-sm">
            Энэ гурван талын хамтын ажиллагаа нь "Мэдлэгийн эдийн засаг"-ийг бий болгоно.
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h4 className="font-bold mb-4">Инновацийн Тэргүүлэх Чиглэл</h4>
          <div className="space-y-3">
            {['Технологийн Инкубатор', 'Spin-off дэмжлэг', 'Нээлттэй лаборатори', 'Эрсдэлийн санхүүжилт'].map(tag => (
              <div key={tag} className="bg-slate-50 px-4 py-2 rounded-lg text-sm text-slate-600 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h4 className="font-bold text-indigo-900 mb-2">АНУ-ын NSF Загвар</h4>
          <p className="text-indigo-800 text-xs">
            АНУ-ын Үндэсний Шинжлэх Ухааны Сангийн (NSF) их сургууль-аж үйлдвэрийн хамтын ажиллагааны (IUCRC) загварыг Монголд нутагшуулах боломжтой.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const ConclusionSection: React.FC = () => (
  <div className="max-w-4xl mx-auto space-y-12 py-10">
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-extrabold text-slate-900">Бодлогын Сонголт</h2>
      <p className="text-slate-500 text-lg">Бидний өмнө хоёр зам байна:</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
        <div className="bg-slate-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
          <TrendingDown size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-800">Сонголт 1</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Залуусаа гадаадад "хямд ажиллах хүч" болгож явуулан, тухайн улсын R&D-г тэтгэсээр байх.
        </p>
        <div className="text-red-600 font-bold flex items-center text-sm">
          <AlertCircle size={16} className="mr-2" /> Үр дүн: Оюуны хоосон орон зай
        </div>
      </div>

      <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-200 hover:scale-105 transition-all text-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
          <GraduationCap size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Сонголт 2</h3>
        <p className="text-blue-50 leading-relaxed mb-6">
          Дотоодын судалгааны системдээ хөрөнгө оруулан, "Research Stipend"-ээр дамжуулан "Мэдлэг бүтээгч" үеийг бэлтгэх.
        </p>
        <div className="text-green-300 font-bold flex items-center text-sm">
          <ShieldCheck size={16} className="mr-2" /> Үр дүн: Эдийн засгийн тусгаар тогтнол
        </div>
      </div>
    </div>

    <div className="text-center">
      <p className="text-slate-400 italic text-sm">
        Шийдвэр гаргах цаг одоо.
      </p>
    </div>
  </div>
);

export const AnalystSection: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [chat, setChat] = React.useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const userMsg = query;
    setQuery('');
    setChat(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    const { getPolicyAnalystResponse } = await import('../services/geminiService');
    const response = await getPolicyAnalystResponse(userMsg);
    
    setChat(prev => [...prev, {role: 'bot', text: response || ''}]);
    setLoading(false);
  };

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat]);

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
             <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold">Бодлогын Шинжээч (AI)</h3>
            <p className="text-xs text-blue-400">Gemini 3 Flash Powered</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6">
        {chat.length === 0 && (
          <div className="text-center py-10 space-y-4">
             <p className="text-slate-400">Та энэхүү стратегийн шинэчлэлтэй холбоотой хүссэн асуултаа асууна уу.</p>
             <div className="flex flex-wrap justify-center gap-2">
                {['Research Stipend гэж юу вэ?', 'Санхүүжилтийн загварыг хэрхэн өөрчлөх вэ?', 'Brain Drain-ийг хэрхэн зогсоох вэ?'].map(q => (
                  <button 
                    key={q} 
                    onClick={() => setQuery(q)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-xs transition-colors"
                  >
                    {q}
                  </button>
                ))}
             </div>
          </div>
        )}
        {chat.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none border border-slate-200 flex space-x-2">
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-slate-50 border-t border-slate-200 flex space-x-4">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Асуултаа энд бичнэ үү..."
          className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button 
          disabled={loading || !query.trim()}
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
        >
          Илгээх
        </button>
      </form>
    </div>
  );
};
