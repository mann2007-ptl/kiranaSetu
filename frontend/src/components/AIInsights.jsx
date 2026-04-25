import React from 'react';
import Card from './Card';
import Button from './Button';
import { aiInsights } from '../data/mockData';
import { Sparkles, TrendingUp, AlertCircle, TrendingDown } from 'lucide-react';

const AIInsights = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'trend': return <TrendingUp size={18} className="text-indigo-600" />;
            case 'action': return <AlertCircle size={18} className="text-amber-600" />;
            case 'opportunity': return <TrendingDown size={18} className="text-emerald-600" />;
            default: return <Sparkles size={18} className="text-indigo-600" />;
        }
    };

    const getBgColor = (type) => {
        switch (type) {
            case 'trend': return 'bg-indigo-100';
            case 'action': return 'bg-amber-100';
            case 'opportunity': return 'bg-emerald-100';
            default: return 'bg-indigo-100';
        }
    };

    return (
        <Card className="h-full bg-gradient-to-br from-[#Eef2ff] to-[#F5F3FF] border-indigo-50 relative overflow-hidden flex flex-col">
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={20} className="text-indigo-600" />
                        <h3 className="text-lg font-bold text-gray-900">AI Intelligence</h3>
                    </div>
                    <p className="text-sm text-indigo-900/60">Automated insights based on your store data</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 relative z-10">
                {aiInsights.map((insight) => (
                    <div
                        key={insight.id}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white hover:bg-white transition-colors duration-200"
                    >
                        <div className={`shrink-0 p-2 rounded-lg ${getBgColor(insight.type)} mt-0.5`}>
                            {getIcon(insight.type)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800 leading-snug">
                                {insight.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 relative z-10 pt-4 border-t border-indigo-900/5">
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
