import React from 'react';
import { Clock, User, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      message: 'New user registration',
      user: 'John Doe',
      time: '2 minutes ago',
      icon: User,
      color: 'blue'
    },
    {
      id: 2,
      type: 'sale',
      message: 'New purchase completed',
      user: 'Sarah Smith',
      amount: '$299',
      time: '5 minutes ago',
      icon: ShoppingCart,
      color: 'green'
    },
    {
      id: 3,
      type: 'revenue',
      message: 'Monthly goal achieved',
      time: '12 minutes ago',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      id: 4,
      type: 'analytics',
      message: 'Traffic increased by 15%',
      time: '1 hour ago',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      id: 5,
      type: 'user',
      message: 'User profile updated',
      user: 'Mike Johnson',
      time: '2 hours ago',
      icon: User,
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Latest updates and notifications</p>
        </div>
        <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <div className={`p-2 rounded-full ${getColorClasses(activity.color)}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
                {activity.user && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">{activity.user}</p>
                )}
                {activity.amount && (
                  <p className="text-sm font-medium text-green-600">{activity.amount}</p>
                )}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200">
          View all activities →
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;