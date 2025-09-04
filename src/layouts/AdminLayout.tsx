// src/layouts/AdminLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/AdminSidebar';
import Header from '../components/Header';
import { Theme } from '../hooks/useTheme';

interface AdminLayoutProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ theme, setTheme, resolvedTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="lg:pl-64">
        <Header 
          onMenuClick={() => setSidebarOpen(true)} 
          theme={theme}
          onThemeChange={setTheme}
          resolvedTheme={resolvedTheme}
        />
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet /> {/* This renders the matched child route */}
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;