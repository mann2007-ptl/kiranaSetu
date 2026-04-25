import React from 'react';
import Card from './Card';
import { Package, IndianRupee, AlertTriangle, TrendingUp } from 'lucide-react';

const icons = {
    'package': Package,
    'indian-rupee': IndianRupee,
    'alert-triangle': AlertTriangle,
    'trending-up': TrendingUp
};

const StatCard = ({ title, value, trend, trendType, icon }) => {
    const IconComponent = icons[icon] || Package;

    const isPositive = trendType === 'positive';
    const isNegative = trendType === 'negative';

    return (
        <Card className="flex flex-col h-full group cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} strokeWidth={2} />
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-50">
                <span
                    className={`text-xs font-semibold ${isPositive ? 'text-emerald-600' : isNegative ? 'text-rose-600' : 'text-gray-500'
                        }`}
                >
                    {trend}
                </span>
            </div>
        </Card>
    );
};

export default StatCard;
