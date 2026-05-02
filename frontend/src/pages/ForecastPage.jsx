import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import {
    Download, RefreshCw, TrendingUp, Sparkles, AlertCircle, CheckCircle, Clock, MoreVertical
} from 'lucide-react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend
} from 'recharts';
import { forecastData, reorderRecommendations } from '../data/mockData';

const ForecastPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-gray-950 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen min-w-0">
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* 1. Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1 block">
                                    Intelligence Suite
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                    Combined Forecast
                                </h1>
                                <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                                    AI-powered sales and demand predictions based on historical velocity and real-time local trends.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="secondary" icon={Download}>Download Analysis</Button>
                                <Button variant="primary" icon={RefreshCw} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none">
                                    Refresh Engine
                                </Button>
                            </div>
                        </div>

                        {/* 2. Main Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

                            {/* LEFT: Demand Prediction Graph */}
                            <Card className="flex flex-col h-full min-h-[400px]">
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-gray-900">Demand Prediction Graph</h3>
                                    <p className="text-sm text-gray-500">Next 14 Days Forecast Horizon</p>
                                </div>

                                <div className="flex-1 w-full min-h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={forecastData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                            <XAxis
                                                dataKey="day"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                                dy={10}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                            />
                                            <Tooltip
                                                cursor={{ fill: '#f8fafc' }}
                                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            />
                                            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                                            <Bar dataKey="predicted" name="Predicted Demand" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={32} />
                                            <Bar dataKey="baseline" name="Avg Baseline" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>

                            {/* RIGHT: Insight Cards */}
                            <div className="flex flex-col gap-6">
                                {/* Hot Recommendation */}
                                <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-md shadow-indigo-200">
                                    <div className="flex items-center gap-2 mb-4 opacity-90">
                                        <Sparkles size={18} />
                                        <span className="text-sm font-semibold tracking-wide uppercase">Hot Recommendation</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-1">Organic Avocados</h4>
                                    <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                                        Predicted surge due to upcoming local health marathon. Stock out highly likely.
                                    </p>
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-indigo-200 text-xs font-medium mb-0.5">ESTIMATED DEMAND</p>
                                            <p className="text-3xl font-extrabold">2,450 <span className="text-lg font-semibold opacity-80">units</span></p>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                                            <TrendingUp size={20} className="text-white" />
                                        </button>
                                    </div>
                                </div>

                                {/* Global Outlook */}
                                <Card>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Global Outlook</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Overall category velocity vs last month</p>

                                    <div className="flex items-end gap-3 mb-5">
                                        <span className="text-3xl font-extrabold text-gray-900 dark:text-white">18.4%</span>
                                        <span className="flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-md mb-1">
                                            <TrendingUp size={14} className="mr-1" /> Up
                                        </span>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-xs font-semibold mb-1.5">
                                            <span className="text-gray-500 dark:text-gray-400">Confidence Level</span>
                                            <span className="text-indigo-600 dark:text-indigo-400">94%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: '94%' }}></div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* 3. Bottom Section: Reorder Recommendations */}
                        <div className="pt-4">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Reorder Recommendations</h2>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">Automated quantities based on lead times and stock velocity</p>
                                </div>
                                <Button variant="secondary">Generate Purchase List</Button>
                            </div>

                            <Card noPadding className="overflow-hidden">
                                <div className="overflow-x-auto custom-scrollbar">
                                    <table className="w-full text-left text-sm whitespace-nowrap">
                                        <thead className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-100 dark:border-gray-700">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Product Name</th>
                                                <th className="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Current Stock</th>
                                                <th className="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Suggested Reorder</th>
                                                <th className="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400">Urgency</th>
                                                <th className="px-6 py-4 font-semibold text-gray-500 dark:text-gray-400 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                                            {reorderRecommendations.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/40 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-lg shrink-0 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                                                                {item.name.charAt(0).toUpperCase()}
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.category}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="font-medium text-gray-900 dark:text-gray-200">{item.currentStock} units</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-bold">
                                                            + {item.suggestedQty}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <UrgencyBadge urgency={item.urgency} />
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                                                            <MoreVertical size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>

                        <div className="h-8"></div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const UrgencyBadge = ({ urgency }) => {
    switch (urgency) {
        case 'Critical':
            return (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-100">
                    <AlertCircle size={12} /> Critical
                </span>
            );
        case 'High':
            return (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
                    <AlertCircle size={12} /> High
                </span>
            );
        case 'Scheduled':
            return (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <CheckCircle size={12} /> Scheduled
                </span>
            );
        default:
            return (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                    <Clock size={12} /> {urgency}
                </span>
            );
    }
};

export default ForecastPage;
