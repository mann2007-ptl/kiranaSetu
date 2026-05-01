import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const TopNavbar = ({ onMenuClick }) => {
    return (
        <header className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30 sticky top-0 shrink-0">
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden transition-colors"
                >
                    <Menu size={20} />
                </button>

                <div className="hidden sm:flex items-center w-full max-w-md relative group">
                    <div className="absolute left-3 text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search insights, products, or orders..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-[12px] text-sm text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                {/* Theme Toggle */}
                <ThemeToggle />

                <button className="relative p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

                <button className="flex items-center p-1 rounded-full border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&q=80"
                        alt="User profile"
                        className="w-8 h-8 rounded-full object-cover shadow-sm bg-indigo-100"
                    />
                </button>
            </div>
        </header>
    );
};

export default TopNavbar;
