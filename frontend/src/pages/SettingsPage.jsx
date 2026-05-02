import React, { useState, useEffect } from 'react';
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
    const [user, setUser] = useState(null);
    const [profileData, setProfileData] = useState({
        name: '', email: '', storeName: '', phone: ''
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData) {
                setUser(userData);
                setProfileData({
                    name: userData.name || '',
                    email: userData.email || '',
                    storeName: userData.storeName || '',
                    phone: userData.phone || ''
                });
            }
        } catch (e) { }
    }, []);

    const handleSaveProfile = async () => {
        setIsSaving(true);
        try {
            const res = await fetch('/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(profileData)
            });
            const data = await res.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.data));
                setUser(data.data);
                alert('Profile updated successfully!');
            } else {
                alert(data.message || 'Update failed');
            }
        } catch (e) {
            console.error(e);
            alert('An error occurred');
        } finally {
            setIsSaving(false);
        }
    };

    // States for custom toggles
    const [gstEnabled, setGstEnabled] = useState(true);
    const [autoTrack, setAutoTrack] = useState(false);

    const [alertsLowStock, setAlertsLowStock] = useState(true);
    const [alertsDemand, setAlertsDemand] = useState(true);
    const [alertsDaily, setAlertsDaily] = useState(false);
    const [alertsEmail, setAlertsEmail] = useState(true);
    const [alertsSMS, setAlertsSMS] = useState(false);

    const [twoFactor, setTwoFactor] = useState(false);

    // Reusable input class
    const inputClass = "w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium text-gray-900 dark:text-white";

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-gray-950 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
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
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
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
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center border border-indigo-100 dark:border-indigo-800">
                                            <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Profile Settings</h2>
                                            <p className="text-sm text-gray-500">Update your store’s basic profile information.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Store Name</label>
                                            <input type="text" value={profileData.storeName} onChange={e => setProfileData({ ...profileData, storeName: e.target.value })} className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Owner Name</label>
                                            <input type="text" value={profileData.name} onChange={e => setProfileData({ ...profileData, name: e.target.value })} className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                                            <input type="email" value={profileData.email} onChange={e => setProfileData({ ...profileData, email: e.target.value })} className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                                            <input type="tel" value={profileData.phone} onChange={e => setProfileData({ ...profileData, phone: e.target.value })} className={inputClass} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-2">
                                        <Button variant="secondary" icon={UploadCloud} className="flex-1 sm:flex-none justify-center">Upload Logo</Button>
                                        <Button variant="primary" onClick={handleSaveProfile} disabled={isSaving} className="flex-1 sm:flex-none justify-center">
                                            {isSaving ? 'Saving...' : 'Save Changes'}
                                        </Button>
                                    </div>
                                </Card>

                                {/* Store Preferences Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                                            <Store size={20} className="text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Store Preferences</h2>
                                            <p className="text-sm text-gray-500">Regional and tracking configurations.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Currency</label>
                                            <select className={`${inputClass} appearance-none`}>
                                                <option value="INR">INR (₹)</option>
                                                <option value="USD">USD ($)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Timezone</label>
                                            <select className={`${inputClass} appearance-none`}>
                                                <option value="IST">Asia/Kolkata</option>
                                                <option value="UTC">UTC</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Language</label>
                                            <select className={`${inputClass} appearance-none`}>
                                                <option value="en">English (US)</option>
                                                <option value="hi">Hindi</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <AnimatedToggle label="Enable GST Calculation" active={gstEnabled} onChange={() => setGstEnabled(!gstEnabled)} />
                                        <AnimatedToggle label="Enable Auto Inventory Tracking" active={autoTrack} onChange={() => setAutoTrack(!autoTrack)} />
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                                        <Button variant="primary">Save Preferences</Button>
                                    </div>
                                </Card>

                                {/* Notification Settings Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center border border-emerald-100 dark:border-emerald-800">
                                            <Bell size={20} className="text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Notification Settings</h2>
                                            <p className="text-sm text-gray-500">Control when and how you are notified.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <AnimatedToggle label="Low Stock Alerts" active={alertsLowStock} onChange={() => setAlertsLowStock(!alertsLowStock)} />
                                        <AnimatedToggle label="Demand Spike Alerts" active={alertsDemand} onChange={() => setAlertsDemand(!alertsDemand)} />
                                        <AnimatedToggle label="Daily Sales Summary" active={alertsDaily} onChange={() => setAlertsDaily(!alertsDaily)} />
                                        <hr className="border-gray-100 dark:border-gray-700 my-4" />
                                        <AnimatedToggle label="Email Notifications" active={alertsEmail} onChange={() => setAlertsEmail(!alertsEmail)} />
                                        <AnimatedToggle label="SMS Notifications" active={alertsSMS} onChange={() => setAlertsSMS(!alertsSMS)} />
                                    </div>
                                </Card>

                                {/* Security Settings Card */}
                                <Card>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                            <ShieldAlert size={20} className="text-slate-600 dark:text-slate-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Security Settings</h2>
                                            <p className="text-sm text-gray-500">Manage your passwords and two-factor authentication.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div className="sm:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Current Password</label>
                                            <input type="password" placeholder="••••••••" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">New Password</label>
                                            <input type="password" placeholder="••••••••" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Confirm Password</label>
                                            <input type="password" placeholder="••••••••" className={inputClass} />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <AnimatedToggle label="Enable Two-Factor Authentication (2FA)" active={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between gap-4">
                                        <Button variant="primary">Update Password</Button>
                                        <button className="text-sm font-semibold text-gray-500 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400 transition-colors px-4 py-2.5">
                                            Logout from all devices
                                        </button>
                                    </div>
                                </Card>

                            </div>

                            {/* RIGHT SIDE (Sidebar Panel 30%) */}
                            <div className="lg:w-80 flex flex-col gap-6 shrink-0">

                                {/* Account Summary Card */}
                                <Card className="text-center flex flex-col items-center p-8">
                                    <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md shadow-indigo-200 mb-4 border-4 border-white dark:border-gray-800">
                                        {user?.name ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{profileData.storeName || 'KiranaSetu Store'}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{profileData.email || 'user@store.com'}</p>

                                    <div className="flex items-center gap-2 mb-6">
                                        <Badge variant="success" className="bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800">Free Forever</Badge>
                                    </div>
                                </Card>

                                {/* System Status Card */}
                                <Card>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity size={18} className="text-emerald-600 dark:text-emerald-400" />
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white">System Status</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> API Status</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">Active</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><Database size={14} /> Database</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">Connected</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-t border-gray-100 dark:border-gray-700 pt-3">
                                            <span className="text-gray-500 font-medium flex items-center gap-2"><RefreshCw size={14} /> Last Sync</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">2 mins ago</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 font-medium">Uptime</span>
                                            <span className="font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-md">99.9%</span>
                                        </div>
                                    </div>
                                </Card>

                                {/* Danger Zone Card */}
                                <Card>
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertTriangle size={18} className="text-rose-600 dark:text-rose-400" />
                                        <h3 className="text-base font-bold text-rose-600 dark:text-rose-400">Danger Zone</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                                        Permanently delete your account and remove all store data. This action is not reversible.
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <button className="w-full px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-semibold hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors text-sm">
                                            Reset All Data
                                        </button>
                                        <button className="w-full px-4 py-2.5 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors text-sm shadow-sm shadow-rose-200 dark:shadow-none">
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
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{label}</span>
            <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${active ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
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
