import React from "react";
import MetricsCard from "./MetricsCard";
import ChartCard from "./ChartCard";
import RecentActivity from "./RecentActivity";
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { MetricsCardProps } from "./MetricsCard";

const Dashboard: React.FC = () => {
  const metrics: MetricsCardProps[] = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
    },
    {
      title: "Active Users",
      value: "8,492",
      change: "+5.2%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Orders",
      value: "1,247",
      change: "+18.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "purple",
    },
    {
      title: "Conversion Rate",
      value: "3.21%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Page Views
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                24,867
              </p>
            </div>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm font-medium">+8.2%</span>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Bounce Rate
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                32.4%
              </p>
            </div>
            <div className="flex items-center text-red-600">
              <ArrowDownRight className="h-4 w-4" />
              <span className="text-sm font-medium">-1.8%</span>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-red-500 rounded-full"
              style={{ width: "32%" }}
            ></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Session Duration
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                4:23
              </p>
            </div>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm font-medium">+0:45</span>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "76%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
