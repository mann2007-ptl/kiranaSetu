import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import {
    MapPin, Search, Navigation, PackageSearch
} from 'lucide-react';

const NearbySupplyPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userAddress, setUserAddress] = useState('');
    const [userPincode, setUserPincode] = useState('');
    const [isLocated, setIsLocated] = useState(false);
    const [dispatchedRequests, setDispatchedRequests] = useState([]);

    const handleLocate = (e) => {
        e.preventDefault();
        if (userAddress.trim() && userPincode.trim()) {
            setIsLocated(true);
        }
    };

    const dispatchRequest = (e) => {
        e.preventDefault();

        const storeName = e.target.elements[0].value;
        const productNeeded = e.target.elements[1].value;
        const quantity = e.target.elements[2].value;
        const urgency = e.target.elements[3].value;

        const newRequest = {
            id: Date.now(),
            storeName,
            productNeeded,
            quantity,
            urgency,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setDispatchedRequests([newRequest, ...dispatchedRequests]);
        e.target.reset();
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-gray-950 overflow-hidden font-sans">
            <Helmet>
                <title>Nearby Supply — KiranaSetu</title>
                <meta name="description" content="Locate nearby suppliers and dispatch direct supply requests using Google Maps integration." />
            </Helmet>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen min-w-0">
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-6">

                        {/* 1. Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1 block">
                                    Logistics Map
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                    Nearby Supply Network
                                </h1>
                                <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                                    Access precise, real-time Google Maps geolocation to track active store partners and supply hubs.
                                </p>
                            </div>
                        </div>

                        {/* 2. Full Width Map Container */}
                        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl shadow-indigo-100/20 dark:shadow-none flex flex-col">

                            {/* Hyper-realistic Interactive Map Container */}
                            <div className="w-full h-[600px] lg:h-[700px] relative bg-gray-100 dark:bg-gray-900 border-gray-100 dark:border-gray-700 flex items-center justify-center">
                                {!isLocated ? (
                                    <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
                                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 max-w-lg w-full mx-auto">
                                            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-100 dark:border-indigo-800">
                                                <MapPin className="text-indigo-600 dark:text-indigo-400" size={32} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Locate Store Network</h3>
                                            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 px-4">Enter your store's location to load precise Google Map supplier data for your grid.</p>
                                            <form onSubmit={handleLocate} className="flex flex-col gap-4">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Full Address (e.g. MG Road, Delhi)"
                                                    value={userAddress}
                                                    onChange={e => setUserAddress(e.target.value)}
                                                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-base font-medium text-gray-900 dark:text-white"
                                                />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Pin Code (e.g. 110001)"
                                                    value={userPincode}
                                                    onChange={e => setUserPincode(e.target.value)}
                                                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-base font-medium text-gray-900 dark:text-white"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full mt-3 font-bold px-5 py-4 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none text-white bg-indigo-600 hover:bg-indigo-700 transition-colors text-lg"
                                                >
                                                    Initialize Live Tracking
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        title="Nearby Supply Stores Map"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(userAddress + ' ' + userPincode + ' supermarket')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        allowFullScreen
                                    />
                                )}

                                {/* Glassmorphism Overlay Fixed to Bottom */}
                                {isLocated && (
                                    <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-end sm:items-center pointer-events-none z-20 gap-4">
                                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700/50 pointer-events-auto flex items-center gap-3 hover:bg-white transition-colors cursor-default">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-300"></div>
                                            <span className="font-bold text-gray-900 dark:text-white sm:text-base tracking-wide shadow-sm">Live GPS Matrix: {userPincode}</span>
                                        </div>

                                        <button
                                            onClick={() => setIsLocated(false)}
                                            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700/50 pointer-events-auto flex items-center gap-2 hover:bg-white transition-colors text-gray-700 dark:text-gray-300 font-bold"
                                        >
                                            <Search size={18} />
                                            Change Node
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 3. Direct Partner Request Form */}
                        {isLocated && (
                            <div className="mt-8 mb-12 flex justify-center w-full">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl w-full overflow-hidden flex flex-col md:flex-row">
                                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white md:w-2/5 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                        <PackageSearch size={48} className="mb-6 text-indigo-200" strokeWidth={1.5} />
                                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight tracking-tight">Direct Supply<br />Dispatch</h3>
                                        <p className="text-indigo-100 text-sm sm:text-base leading-relaxed font-medium">Have you found a relevant supplier on the map above? Enter their exact shop details and dispatch a high-priority product request directly to them.</p>
                                    </div>
                                    <div className="p-8 md:w-3/5 relative">
                                        <form onSubmit={dispatchRequest} className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide">Target Store Name</label>
                                                <input required type="text" placeholder="e.g., Supper Prem" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white font-semibold shadow-sm" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide">Product Needed</label>
                                                <input required type="text" placeholder="e.g., Aashirvaad Atta 5kg" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white font-semibold shadow-sm" />
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-5">
                                                <div className="flex-1">
                                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide">Quantity</label>
                                                    <input required type="number" min="1" placeholder="10" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white font-semibold shadow-sm" />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wide">Urgency</label>
                                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-white font-semibold shadow-sm appearance-none">
                                                        <option>Standard Restock</option>
                                                        <option>High Priority</option>
                                                        <option>Critical (Emergency)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-4 rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98] text-lg">
                                                Send Request Payload
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 4. Dispatched Requests Log */}
                        {isLocated && dispatchedRequests.length > 0 && (
                            <div className="mt-4 mb-12 mx-auto flex justify-center w-full">
                                <div className="w-full max-w-3xl">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Active Dispatched Requests</h3>
                                    <div className="space-y-4">
                                        {dispatchedRequests.map(req => (
                                            <div key={req.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-indigo-100 dark:border-indigo-900/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{req.productNeeded} <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">x{req.quantity}</span></h4>
                                                    <p className="text-sm text-gray-500 mt-1">Requested from <strong className="text-gray-700 dark:text-gray-300">{req.storeName}</strong> at {req.timestamp}</p>
                                                </div>
                                                <span className={`px-3 py-1.5 text-xs font-bold rounded-lg border text-center ${req.urgency.includes('High') ? 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400' : req.urgency.includes('Critical') ? 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400' : 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400'}`}>
                                                    {req.urgency}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="h-8"></div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NearbySupplyPage;
