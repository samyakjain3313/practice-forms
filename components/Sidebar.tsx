'use client';

import Link from 'next/link';
import { LayoutDashboard, FileText, FileBadge, LogOut, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Forms', href: '/forms', icon: FileText },
    { name: 'Mock Tests', href: '/mock-tests', icon: FileBadge },
  ];

  return (
    <div className="w-[260px] h-screen bg-[#fffafa] border-r border-red-50 flex flex-col hidden md:flex sticky top-0 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-lg leading-none">A</div>
        </div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight flex-1">Adda247</h1>
        <Menu className="w-5 h-5 text-slate-400 cursor-pointer" />
      </div>
      
      <nav className="flex-1 px-4 space-y-1.5 mt-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== '/' || (pathname === '/' && item.href === '/');
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-[15px] font-medium ${
                isActive 
                  ? 'bg-red-50 text-red-600' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <item.icon className="w-[22px] h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mb-2">
        <div className="flex items-center gap-3 px-2 py-3">
          <img src="https://i.pravatar.cc/150?u=rahul" alt="User avatar" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-800 truncate">Rahul Kumar</p>
            <p className="text-[11px] text-slate-500 truncate">rahul@example.com</p>
          </div>
        </div>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors text-[15px] font-medium mt-1"
        >
          <LogOut className="w-[22px] h-[22px]" strokeWidth={2} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
