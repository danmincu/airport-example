'use client';

import React, { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile header with hamburger */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-sidebar z-30 flex items-center px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-150"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-4 text-white font-semibold">Amik Aviation</span>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className="flex-1 p-4 pt-20 lg:pt-8 lg:p-8">
        {children}
      </main>
    </div>
  );
}
