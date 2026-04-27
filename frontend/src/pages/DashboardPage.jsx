import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import AIInsights from '../components/AIInsights';
import InventoryList from '../components/InventoryList';

const DashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/dashboard/stats', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (!res.ok) {
                    console.error("Dashboard stats failed:", await res.text());
                    return;
                }
                const data = await res.json();

                setStats([
                    {
                        id: 1,
                        title: 'Total Products',
                        value: data.totalProducts,
                        trend: 'Current active SKUs',
                        trendType: 'positive',
                        icon: 'package'
                    },
                    {
                        id: 2,
                        title: 'Today\'s Sales',
                        value: `₹${data.todaySales}`,
                        trend: 'Updating in real-time',
                        trendType: 'positive',
                        icon: 'indian-rupee'
                    },
                    {
                        id: 3,
                        title: 'Low Stock Items',
                        value: data.lowStockItems,
                        trend: 'Requires attention',
                        trendType: 'negative',
                        icon: 'alert-triangle'
                    },
                    {
                        id: 4,
                        title: 'Predicted Demand',
                        value: `+${data.predictedDemand}`,
                        trend: 'Expected daily items',
                        trendType: 'positive',
                        icon: 'trending-up'
                    }
                ]);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="flex h-screen bg-[#F9FAFB] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">

            {/* Fixed Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen min-w-0">

                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header Content */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Intelligence Center</h1>
                            <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium">Real-time inventory and demand forecasting</p>
                        </div>

                        {/* Stat Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {stats.map((stat) => (
                                <StatCard
                                    key={stat.id}
                                    title={stat.title}
                                    value={stat.value}
                                    trend={stat.trend}
                                    trendType={stat.trendType}
                                    icon={stat.icon}
                                />
                            ))}
                        </div>

                        {/* Main Graphs & AI Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                                <SalesChart />
                            </div>
                            <div className="lg:col-span-1">
                                <AIInsights />
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="grid grid-cols-1">
                            <InventoryList />
                        </div>

                        {/* Extra padding buffer for scroll bottom safety */}
                        <div className="h-8"></div>
                    </div>
                </main>
            </div>

        </div>
    );
};

export default DashboardPage;
