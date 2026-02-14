"use client"

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DashboardLayout({ children, title, onAddClick }) {
  const router = useRouter();
  const menuItems = [
    { name: 'Gallery', href: '/dashboard/gallery', icon: '🖼️' },
    { name: 'Events', href: '/dashboard/events', icon: '📅' },
    { name: 'Newsletters', href: '/dashboard/newsletters', icon: '📩' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col sticky top-0 h-screen">
        <div className="p-8 text-2xl font-black tracking-tight border-b border-slate-800">
          CMS <span className="text-blue-400">DASH</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link key={item.name} href={item.href} 
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}>
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">JD</div>
            <div>
              <p className="text-sm font-semibold">Admin User</p>
              <p className="text-xs text-slate-500">Log out</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-10 py-6 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
          <button 
            onClick={onAddClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <span className="text-xl">+</span> Add New {title}
          </button>
        </header>

        <section className="p-10">{children}</section>
      </main>
    </div>
  );
}