import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    BarChart3,
    TrendingUp,
    BellRing,
    Settings,
    Store,
    MapPin
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { name: 'Inventory', icon: Package, path: '/inventory' },
        { name: 'Sales', icon: BarChart3, path: '/sales' },
        { name: 'Forecast', icon: TrendingUp, path: '/forecast' },
        { name: 'Alerts', icon: BellRing, path: '/alerts' },
        { name: 'Nearby Supply', icon: MapPin, path: '/nearby-supply' },
        { name: 'Settings', icon: Settings, path: '/settings' },
    ];

    const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)]
    transform transition-transform duration-300 ease-in-out flex flex-col
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0 lg:static lg:h-screen lg:shrink-0
  `;

    const isLiveRoute = (path) => {
        return path === '/dashboard' || path === '/inventory' || path === '/sales' || path === '/forecast' || path === '/alerts' || path === '/nearby-supply' || path === '/settings';
    };

    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar container */}
            <aside className={sidebarClasses}>
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-gray-50 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                            <Store size={20} strokeWidth={2.5} />
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-gray-900">
                            Kirana<span className="text-indigo-600">Setu</span>
                        </span>
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4 flex flex-col gap-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        const isClickable = isLiveRoute(item.path);

                        return isClickable ? (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                  ${isActive
                                        ? 'bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100/50'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
                                onClick={() => {
                                    if (window.innerWidth < 1024) onClose();
                                }}
                            >
                                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
                                {item.name}
                            </NavLink>
                        ) : (
                            <a
                                key={item.name}
                                href={item.path}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (window.innerWidth < 1024) onClose();
                                }}
                            >
                                <Icon size={18} strokeWidth={2} className="text-gray-400" />
                                {item.name}
                            </a>
                        );
                    })}
                </div>

                {/* Bottom User Area / Help */}
                <div className="p-4 border-t border-gray-50">
                    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow">
                        <p className="text-xs font-semibold text-indigo-600 mb-1">PRO PLAN</p>
                        <p className="text-[13px] text-gray-600 font-medium leading-tight">KiranaSetu Premium</p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
