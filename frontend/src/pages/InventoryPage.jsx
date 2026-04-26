import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import StatCard from '../components/StatCard';
import InventoryTable from '../components/InventoryTable';
import Button from '../components/Button';
import { Plus } from 'lucide-react';
import { inventoryStatsData } from '../data/mockData';

const tabs = ['All Products', 'Low Stock', 'Out of Stock'];

const InventoryPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('All Products');

    return (
        <div className="flex h-screen bg-[#F9FAFB] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">

            {/* Fixed Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen min-w-0">

                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Product Inventory</h1>
                                <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium">Manage your stock levels, monitor categories, and optimize replenishment</p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 flex-wrap">
                                {/* Tabs */}
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-0.5">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                                                ${activeTab === tab
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <Button icon={Plus}>Add Product</Button>
                            </div>
                        </div>

                        {/* Stat Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {inventoryStatsData.map((stat) => (
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

                        {/* Inventory Table */}
                        <InventoryTable />

                        {/* Extra padding buffer for scroll bottom safety */}
                        <div className="h-8"></div>
                    </div>
                </main>
            </div>

        </div>
    );
};

export default InventoryPage;
