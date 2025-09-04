import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  const performanceData = [
    { name: 'Desktop', value: 65, color: 'bg-blue-500' },
    { name: 'Mobile', value: 28, color: 'bg-green-500' },
    { name: 'Tablet', value: 7, color: 'bg-purple-500' }
  ];

  const trafficSources = [
    { source: 'Organic Search', visits: '12,847', percentage: '45.2%', change: '+12.3%', trend: 'up' },
    { source: 'Direct', visits: '8,923', percentage: '31.4%', change: '+8.7%', trend: 'up' },
    { source: 'Social Media', visits: '4,156', percentage: '14.6%', change: '-2.1%', trend: 'down' },
    { source: 'Email', visits: '2,489', percentage: '8.8%', change: '+15.2%', trend: 'up' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Detailed insights and performance metrics for your platform.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">284,592</p>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">48,726</p>
              <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
            </div>
            <Activity className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4:32</p>
              <p className="text-sm text-green-600 mt-1">+0:45 from last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">23.4%</p>
              <p className="text-sm text-red-600 mt-1">-2.1% from last month</p>
            </div>
            <PieChart className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Traffic Sources and Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-200">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{source.source}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{source.percentage}</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{source.visits} visits</p>
                    <p className={`text-xs font-medium ${
                      source.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {source.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Types</h3>
          <div className="space-y-4">
            {performanceData.map((device, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{device.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{device.value}%</p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${device.color}`}
                    style={{ width: `${device.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">65%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Desktop</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">28%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mobile</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">7%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tablet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Trends</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Daily metrics over the past 30 days</p>
          </div>
          <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 text-sm transition-colors duration-200">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Simple trend visualization */}
        <div className="h-64 flex items-end justify-between space-x-1">
          {Array.from({ length: 30 }, (_, i) => {
            const height = Math.random() * 200 + 20;
            return (
              <div
                key={i}
                className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200 cursor-pointer rounded-t-sm flex-1"
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">24.8k</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Daily Views</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+18.5%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Growth Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">742k</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;