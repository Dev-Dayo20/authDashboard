import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Theme } from '../hooks/useTheme';

interface HeaderProps {
  onMenuClick: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, theme, onThemeChange, resolvedTheme }) => {
  return (
    <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white lg:hidden transition-colors duration-200"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 flex-1 lg:ml-0">
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 pl-10 pr-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle 
            theme={theme}
            onThemeChange={onThemeChange}
            resolvedTheme={resolvedTheme}
          />
          
          <button className="relative text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Admin User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;