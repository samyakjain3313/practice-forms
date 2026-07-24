import { Search, Bell, Moon } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="h-[80px] bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
      <h2 className="text-[22px] font-bold text-red-600 tracking-tight">Adda247 Dashboard</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-[18px] w-[18px] text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
            placeholder="Search courses, tests, notes..."
          />
        </div>


        <div className="flex items-center gap-4 text-slate-400">
          <button className="relative hover:text-slate-600 transition-colors flex items-center gap-1.5 text-sm font-medium">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
            <span className="absolute top-0 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="w-px h-5 bg-slate-200 mx-1"></div>
          
          <button className="hover:text-slate-600 transition-colors p-1">
            <Moon className="w-5 h-5" />
          </button>
          
          <img src="https://i.pravatar.cc/150?u=rahul" alt="User avatar" className="w-9 h-9 rounded-full object-cover ml-2 cursor-pointer border border-slate-200" />
        </div>
      </div>
    </div>
  );
}
