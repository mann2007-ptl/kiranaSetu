import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { Sparkles, TrendingUp, AlertCircle, TrendingDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AIInsights = () => {
    const [insights, setInsights] = useState([]);
    const { isDark } = useTheme();

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const res = await fetch('/api/dashboard/insights', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                if (!res.ok) {
                    return;
                }
                const jsonRes = await res.json();

                if (!Array.isArray(jsonRes.data)) return;

                const formatted = jsonRes.data.map((msg, index) => ({
                    id: `INS-${index}`,
                    message: msg,
                    type: msg.toLowerCase().includes('low') || msg.toLowerCase().includes('slow') ? 'action' : 'trend'
                }));

                setInsights(formatted);
            } catch (error) {
                console.error("Error fetching insights:", error);
            }
        };
        fetchInsights();
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'trend': return <TrendingUp size={18} className="text-indigo-600 dark:text-indigo-400" />;
            case 'action': return <AlertCircle size={18} className="text-amber-600 dark:text-amber-400" />;
            case 'opportunity': return <TrendingDown size={18} className="text-emerald-600 dark:text-emerald-400" />;
            default: return <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />;
        }
    };

    const getBgColor = (type) => {
        switch (type) {
            case 'trend': return 'bg-indigo-100 dark:bg-indigo-900/40';
            case 'action': return 'bg-amber-100 dark:bg-amber-900/40';
            case 'opportunity': return 'bg-emerald-100 dark:bg-emerald-900/40';
            default: return 'bg-indigo-100 dark:bg-indigo-900/40';
        }
    };

    return (
        <Card className={`h-full relative overflow-hidden flex flex-col ${isDark
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'
            : 'bg-gradient-to-br from-[#Eef2ff] to-[#F5F3FF] border-indigo-50'
            }`}>
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={20} className="text-indigo-600 dark:text-indigo-400" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Intelligence</h3>
                    </div>
                    <p className="text-sm text-indigo-900/60 dark:text-gray-400">Automated insights based on your store data</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 relative z-10">
                {insights.map((insight) => (
                    <div
                        key={insight.id}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/70 dark:bg-gray-700/50 backdrop-blur-sm border border-white dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <div className={`shrink-0 p-2 rounded-lg ${getBgColor(insight.type)} mt-0.5`}>
                            {getIcon(insight.type)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                                {insight.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 relative z-10 pt-4 border-t border-indigo-900/5 dark:border-gray-700">
                <Button
                    variant="primary"
                    fullWidth
                    icon={Sparkles}
                >
                    Apply AI Optimizations
                </Button>
            </div>
        </Card>
    );
};

export default AIInsights;
