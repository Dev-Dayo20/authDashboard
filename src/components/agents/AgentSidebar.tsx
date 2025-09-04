// src/components/agent/Sidebar.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  X,
  FileText,
  Users,
  MapPin,
  ClipboardCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgentSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', path: '/agent/dashboard', icon: Home },
    { name: 'Field Reports', path: '/agent/reports', icon: FileText },
    { name: 'Beneficiaries', path: '/agent/beneficiaries', icon: Users },
    { name: 'Field Map', path: '/agent/map', icon: MapPin },
    { name: 'Tasks', path: '/agent/tasks', icon: ClipboardCheck },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75" onClick={onClose} />
          <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white dark:bg-gray-800 transition-colors duration-200">
            <div className="flex h-16 items-center justify-between px-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Field Agent</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 flex-1 space-y-1 px-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`${
                      isActive
                        ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex h-16 items-center justify-center bg-green-600 dark:bg-green-700">
            <h1 className="text-xl font-bold text-white">Field Agent Portal</h1>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-4 py-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`${
                      isActive
                        ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 border-r-2 border-green-600 dark:border-green-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    } group flex w-full items-center rounded-l-md px-3 py-2 text-sm font-medium transition-all duration-200`}
                  >
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentSidebar;