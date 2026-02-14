// app/admin/layout.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Image, Calendar, Mail, LayoutDashboard } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [activeTab, setActiveTab] = useState('gallery');

  const menuItems = [
    { id: 'gallery', label: 'Gallery', icon: <Image size={20} />, href: '/admin' },
    { id: 'events', label: 'Events', icon: <Calendar size={20} />, href: '/admin/events' },
    { id: 'newsletter', label: 'Newsletter', icon: <Mail size={20} />, href: '/admin/newsletters' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 sticky top-0 h-screen">
        <div className="p-8">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-2xl">
            <LayoutDashboard />
            <span>CTEF Admin</span>
          </div>
        </div>
        
        <nav className="px-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              <span className="ml-3 font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}