import React from 'react';
import { BarChart3 } from 'lucide-react';

const ChartCard: React.FC = () => {
  const data = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 38 },
    { month: 'Apr', value: 61 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 68 },
    { month: 'Jul', value: 59 },
    { month: 'Aug', value: 74 },
    { month: 'Sep', value: 82 },
    { month: 'Oct', value: 71 },
    { month: 'Nov', value: 89 },
    { month: 'Dec', value: 95 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly performance metrics</p>
        </div>
        <BarChart3 className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="flex items-end justify-between h-64 space-x-2">
        {data.map((item, index) => (
          <div key={item.month} className="flex-1 flex flex-col items-center">
            <div className="w-full flex items-end justify-center mb-2 relative group">
              <div
                className="w-full bg-blue-500 dark:bg-blue-600 rounded-t-sm transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer relative"
                style={{ height: `${(item.value / maxValue) * 200}px` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  ${item.value}k
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{item.month}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$742k</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">+12.5%</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Growth Rate</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$62k</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Monthly</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;