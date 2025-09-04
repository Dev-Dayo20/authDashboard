import React from 'react';
import { DivideIcon as LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'blue' | 'emerald' | 'purple' | 'orange';
}

const MetricsCard: React.FC<MetricsCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  color 
}) => {
  const colorVariants = {
    blue: 'bg-blue-500 text-blue-600 bg-blue-50',
    emerald: 'bg-emerald-500 text-emerald-600 bg-emerald-50',
    purple: 'bg-purple-500 text-purple-600 bg-purple-50',
    orange: 'bg-orange-500 text-orange-600 bg-orange-50'
  };

  const [bgColor, textColor, lightBg] = colorVariants[color].split(' ');

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-green-600" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-600" />
            )}
            <span className={`text-sm font-medium ml-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`${lightBg} dark:bg-gray-700 p-3 rounded-lg transition-colors duration-200`}>
          <Icon className={`h-6 w-6 ${textColor}`} />
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;