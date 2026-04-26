import React, { useState } from 'react';
import {
    User, Store, Lock, Bell, ShieldAlert, CreditCard,
    UploadCloud, Database, Activity, RefreshCw, AlertTriangle
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';

const SettingsPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // States for custom toggles
    const [gstEnabled, setGstEnabled] = useState(true);
    const [autoTrack, setAutoTrack] = useState(false);

    const [alertsLowStock, setAlertsLowStock] = useState(true);
    const [alertsDemand, setAlertsDemand] = useState(true);
    const [alertsDaily, setAlertsDaily] = useState(false);
    const [alertsEmail, setAlertsEmail] = useState(true);
    const [alertsSMS, setAlertsSMS] = useState(false);

    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <div className="flex h-screen bg-[#F9FAFB] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen min-w-0">
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* 1. Header Section */}
                        <div>
                            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1 block">
                                System Settings
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                Settings
                            </h1>
                            <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                                Manage your store preferences, notifications, and account settings.
                            </p>
                        </div>

                        {/* 2. Settings Layout */}
                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* LEFT SIDE (Main Settings 70%) */}
                            <div className="flex-1 flex flex-col gap-6">

                                {/* Profile Settings Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <User size={20} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Profile Settings</h2>
                                            <p className="text-sm text-gray-500">Update your store’s basic profile information.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Store Name</label>
                                            <input type="text" defaultValue="KiranaSetu Store" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Owner Name</label>
                                            <input type="text" defaultValue="Rahul Sharma" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                            <input type="email" defaultValue="rahul@store.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                            <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-gray-100 mt-2">
                                        <Button variant="secondary" icon={UploadCloud} className="flex-1 sm:flex-none justify-center">Upload Logo</Button>
                                        <Button variant="primary" className="flex-1 sm:flex-none justify-center">Save Changes</Button>
                                    </div>
                                </Card>

                                {/* Store Preferences Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <Store size={20} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Store Preferences</h2>
                                            <p className="text-sm text-gray-500">Regional and tracking configurations.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Currency</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900">
                                                <option value="INR">INR (₹)</option>
                                                <option value="USD">USD ($)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Timezone</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900">
                                                <option value="IST">Asia/Kolkata</option>
                                                <option value="UTC">UTC</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Language</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900">
                                                <option value="en">English (US)</option>
                                                <option value="hi">Hindi</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <AnimatedToggle label="Enable GST Calculation" active={gstEnabled} onChange={() => setGstEnabled(!gstEnabled)} />
                                        <AnimatedToggle label="Enable Auto Inventory Tracking" active={autoTrack} onChange={() => setAutoTrack(!autoTrack)} />
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <Button variant="primary">Save Preferences</Button>
                                    </div>
                                </Card>

                                {/* Notification Settings Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                            <Bell size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Notification Settings</h2>
                                            <p className="text-sm text-gray-500">Control when and how you are notified.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <AnimatedToggle label="Low Stock Alerts" active={alertsLowStock} onChange={() => setAlertsLowStock(!alertsLowStock)} />
                                        <AnimatedToggle label="Demand Spike Alerts" active={alertsDemand} onChange={() => setAlertsDemand(!alertsDemand)} />
                                        <AnimatedToggle label="Daily Sales Summary" active={alertsDaily} onChange={() => setAlertsDaily(!alertsDaily)} />
                                        <hr className="border-gray-100 my-4" />
                                        <AnimatedToggle label="Email Notifications" active={alertsEmail} onChange={() => setAlertsEmail(!alertsEmail)} />
                                        <AnimatedToggle label="SMS Notifications" active={alertsSMS} onChange={() => setAlertsSMS(!alertsSMS)} />
                                    </div>
                                </Card>

                                {/* Security Settings Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                            <ShieldAlert size={20} className="text-slate-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Security Settings</h2>
                                            <p className="text-sm text-gray-500">Manage your passwords and two-factor authentication.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div className="sm:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Current Password</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">New Password</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <AnimatedToggle label="Enable Two-Factor Authentication (2FA)" active={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                                        <Button variant="primary">Update Password</Button>
                                        <button className="text-sm font-semibold text-gray-500 hover:text-rose-600 transition-colors px-4 py-2.5">
                                            Logout from all devices
                                        </button>
                                    </div>
                                </Card>

                            </div>

                            {/* RIGHT SIDE (Sidebar Panel 30%) */}
                            <div className="lg:w-80 flex flex-col gap-6 shrink-0">

                                {/* Account Summary Card */}
                                <Card className="text-center flex flex-col items-center p-8">
                                    <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md shadow-indigo-200 mb-4 border-4 border-white">
                                        RS
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">KiranaSetu Store</h3>
                                    <p className="text-sm text-gray-500 mb-4">rahul@store.com</p>

                                    <div className="flex items-center gap-2 mb-6">
                                        <Badge variant="primary" className="bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">Pro Plan</Badge>
                                        <Badge variant="warning" className="font-bold border border-amber-100">14 Days Left</Badge>
                                    </div>

                                    <Button variant="primary" className="w-full justify-center shadow-sm shadow-indigo-200 bg-gradient-to-r from-indigo-600 to-purple-600 border-none hover:from-indigo-700 hover:to-purple-700">
                                        Upgrade Plan
                                    </Button>
                                </Card>

                                {/* System Status Card */}
                                <Card>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity size={18} className="text-emerald-600" />
                                        <h3 className="text-base font-bold text-gray-900">System Status</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> API Status</span>
                                            <span className="font-semibold text-gray-900">Active</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><Database size={14} /> Database</span>
                                            <span className="font-semibold text-gray-900">Connected</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><RefreshCw size={14} /> Last Sync</span>
                                            <span className="font-semibold text-gray-900">2 mins ago</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium">Uptime</span>
                                            <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">99.9%</span>
                                        </div>
                                    </div>
                                </Card>

                                {/* Danger Zone Card */}
                                <Card>
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertTriangle size={18} className="text-rose-600" />
                                        <h3 className="text-base font-bold text-rose-600">Danger Zone</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                                        Permanently delete your account and remove all store data. This action is not reversible.
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <button className="w-full px-4 py-2.5 rounded-xl border border-rose-200 text-rose-600 font-semibold hover:bg-rose-50 transition-colors text-sm">
                                            Reset All Data
                                        </button>
                                        <button className="w-full px-4 py-2.5 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors text-sm shadow-sm shadow-rose-200">
                                            Delete Account
                                        </button>
                                    </div>
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

// Internal Animated Toggle Switch Component
const AnimatedToggle = ({ label, active, onChange }) => {
    return (
        <div className="flex items-center justify-between group cursor-pointer" onClick={onChange}>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{label}</span>
            <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${active ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
            >
                <div
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-300 ease-in-out ${active ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </div>
        </div>
    );
};

export default SettingsPage;
