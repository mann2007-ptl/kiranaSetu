import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    AlertTriangle, TrendingUp, CheckCircle, Clock,
    Search, Filter, BellRing, Settings, Eye, X, Zap
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { alertsData } from '../data/mockData';

const AlertsPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    // Filter Logic
    const filteredAlerts = alertsData.filter(alert => {
        const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alert.description.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesFilter = true;
        if (filterType !== 'All') {
            if (filterType === 'Critical' && alert.type !== 'critical') matchesFilter = false;
            if (filterType === 'Low Stock' && alert.type !== 'warning') matchesFilter = false;
            if (filterType === 'Demand Spike' && alert.type !== 'info') matchesFilter = false;
            if (filterType === 'Resolved' && alert.type !== 'success') matchesFilter = false;
        }

        return matchesSearch && matchesFilter;
    });

    // Counts
    const criticalCount = alertsData.filter(a => a.type === 'critical').length;
    const warningCount = alertsData.filter(a => a.type === 'warning').length;
    const infoCount = alertsData.filter(a => a.type === 'info').length;
    const successCount = alertsData.filter(a => a.type === 'success').length;

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-gray-950 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
            <Helmet>
                <title>Smart Alerts — KiranaSetu</title>
                <meta name="description" content="Real-time notifications for stock levels, demand spikes, and critical inventory actions." />
            </Helmet>
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
                                    Smart Alerts
                                </h1>
                                <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                                    Real-time notifications for stock levels, demand spikes, and critical actions.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="secondary" icon={CheckCircle}>Mark All as Read</Button>
                                <button className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm">
                                    <Settings size={20} />
                                </button>
                            </div>
                        </div>

                        {/* 2. Alert Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard
                                icon={<AlertTriangle size={24} className="text-rose-600" />}
                                count={criticalCount}
                                label="Critical Alerts"
                                bgColor="bg-rose-50"
                            />
                            <StatCard
                                icon={<Clock size={24} className="text-amber-600" />}
                                count={warningCount}
                                label="Low Stock"
                                bgColor="bg-amber-50"
                            />
                            <StatCard
                                icon={<TrendingUp size={24} className="text-blue-600" />}
                                count={infoCount}
                                label="Demand Spike"
                                bgColor="bg-blue-50"
                            />
                            <StatCard
                                icon={<CheckCircle size={24} className="text-emerald-600" />}
                                count={successCount}
                                label="Resolved Alerts"
                                bgColor="bg-emerald-50"
                            />
                        </div>

                        {/* 3. Main Content Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

                            {/* LEFT: Alerts List */}
                            <div className="flex flex-col gap-6">
                                {/* Filter / Search Bar */}
                                <Card className="p-4" noPadding>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="relative flex-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Search size={18} className="text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                                                placeholder="Search alerts..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Filter size={18} className="text-gray-400 hidden sm:block" />
                                            <select
                                                className="block w-full sm:w-48 pl-3 pr-10 py-2.5 text-base border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-xl transition-all"
                                                value={filterType}
                                                onChange={(e) => setFilterType(e.target.value)}
                                            >
                                                <option>All</option>
                                                <option>Critical</option>
                                                <option>Low Stock</option>
                                                <option>Demand Spike</option>
                                                <option>Resolved</option>
                                            </select>
                                        </div>
                                    </div>
                                </Card>

                                {/* Alert Items */}
                                <div className="space-y-4">
                                    {filteredAlerts.length > 0 ? (
                                        filteredAlerts.map(alert => (
                                            <AlertRow key={alert.id} alert={alert} />
                                        ))
                                    ) : (
                                        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <BellRing size={28} className="text-gray-300 dark:text-gray-500" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No alerts found</h3>
                                            <p className="text-gray-500 dark:text-gray-400 mt-1">We couldn't find any alerts matching your criteria.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT: Optional Panel */}
                            <div className="flex flex-col gap-6 hidden lg:flex">
                                <Card>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Zap size={20} className="text-indigo-600" />
                                        <h3 className="text-lg font-bold text-gray-900">AI Suggestions</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                        Based on an influx of critical low-stock alerts, we recommend enabling <strong>Automated Auto-Reorder</strong> for staples and dairy products.
                                    </p>
                                    <Button variant="primary" className="w-full justify-center">Enable Auto-Reorder</Button>
                                </Card>

                                <Card>
                                    <h3 className="text-base font-bold text-gray-900 mb-4">Recommended Actions</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 items-center group cursor-pointer">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                                                <TrendingUp size={16} className="text-indigo-600" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">Adjust Avocado Pricing</span>
                                        </li>
                                        <li className="flex items-start gap-3 items-center group cursor-pointer">
                                            <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 group-hover:bg-rose-100 transition-colors">
                                                <AlertTriangle size={16} className="text-rose-600" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-rose-700 transition-colors">Emergency Restock: Oil</span>
                                        </li>
                                    </ul>
                                </Card>
                            </div>

                        </div>

                        <div className="h-8"></div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const StatCard = ({ icon, count, label, bgColor }) => (
    <Card className="hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${bgColor} dark:bg-opacity-20`}>
                {icon}
            </div>
            <div>
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{count}</p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
            </div>
        </div>
    </Card>
);

const AlertRow = ({ alert }) => {
    // Config based on type
    const config = {
        critical: { icon: AlertTriangle, color: 'rose', badgeText: 'Critical' },
        warning: { icon: Clock, color: 'amber', badgeText: 'High' },
        info: { icon: TrendingUp, color: 'blue', badgeText: 'Info' },
        success: { icon: CheckCircle, color: 'emerald', badgeText: 'Resolved' },
    }[alert.type] || { icon: BellRing, color: 'gray', badgeText: 'Notice' };

    const Icon = config.icon;

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-2xl border-l-[6px] border-l-${config.color}-500 shadow-sm hover:shadow-md transition-all sm:p-5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-100 dark:border-gray-700 group`}>

            {/* Left Content */}
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full bg-${config.color}-50 dark:bg-${config.color}-900/30 flex items-center justify-center mt-0.5 shrink-0`}>
                    <Icon size={20} className={`text-${config.color}-600 dark:text-${config.color}-400`} />
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {alert.title}
                        {alert.status === 'unread' && <span className="w-2 h-2 rounded-full bg-indigo-500 block"></span>}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl leading-relaxed">{alert.description}</p>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-2 uppercase tracking-wide">{alert.timestamp}</p>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-3 lg:gap-4 shrink-0 sm:self-start lg:self-center">
                <div className="hidden sm:block">
                    <Badge variant={config.badgeText === 'Critical' ? 'danger' : config.badgeText === 'High' ? 'warning' : config.badgeText === 'Resolved' ? 'success' : 'primary'}>
                        {config.badgeText}
                    </Badge>
                </div>

                <div className="flex gap-2">
                    <button className="flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 transition-colors">
                        <Eye size={18} />
                    </button>
                    <button className="flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                        <X size={18} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AlertsPage;
