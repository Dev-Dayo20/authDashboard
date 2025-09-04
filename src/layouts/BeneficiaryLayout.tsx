// src/layouts/BeneficiaryLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/beneficiary/BeneficiarySidebar';
import Header from '../components/Header';
import { Theme } from '../hooks/useTheme';

interface BeneficiaryLayoutProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const BeneficiaryLayout: React.FC<BeneficiaryLayoutProps> = ({ theme, setTheme, resolvedTheme }) => {
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
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default BeneficiaryLayout;