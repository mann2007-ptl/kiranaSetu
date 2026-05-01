import React, { useState } from 'react';
import { MapPin, Truck, X, Navigation } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { nearbyStores, supplyRequests } from '../data/mockData';

const validationSchema = Yup.object().shape({
    product: Yup.string().required('Product name is required'),
    quantity: Yup.number().positive('Must be positive').required('Quantity is required'),
    urgency: Yup.string().oneOf(['High', 'Medium', 'Low']).required('Urgency is required')
});

const NearbySupplyPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [distanceFilter, setDistanceFilter] = useState('10');

    // Local state for requests to allow accepting/declining new forms
    const [requests, setRequests] = useState(supplyRequests);

    const filteredStores = nearbyStores.filter(store => parseFloat(store.distance) <= parseFloat(distanceFilter));

    const handleAccept = (id) => {
        setRequests(requests.map(r => r.id === id ? { ...r, status: 'Accepted' } : r));
    };

    const handleDecline = (id) => {
        setRequests(requests.map(r => r.id === id ? { ...r, status: 'Declined' } : r));
    };

    const getUrgencyBadge = (urgency) => {
        switch (urgency) {
            case 'High': return <Badge variant="danger">High</Badge>;
            case 'Medium': return <Badge variant="warning">Medium</Badge>;
            case 'Low': return <Badge variant="success">Low</Badge>;
            default: return null;
        }
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB] dark:bg-gray-950 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen min-w-0">
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar relative">
                    <div className="max-w-7xl mx-auto space-y-8">

                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1 block">
                                    collaboration network
                                </span>
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                    Nearby Supply
                                </h1>
                                <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium max-w-2xl">
                                    Connect with nearby stores to manage urgent inventory needs.
                                </p>
                            </div>
                            <Button variant="primary" icon={Truck} onClick={() => setIsModalOpen(true)}>
                                Request Product
                            </Button>
                        </div>

                        {/* 2-Column Layout */}
                        <div className="flex flex-col lg:flex-row gap-8">

                            {/* LEFT SECTION (Nearby Stores) */}
                            <div className="flex-1 flex flex-col gap-6">
                                <Card>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                                <MapPin size={20} className="text-indigo-600" />
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-bold text-gray-900">Nearby Stores</h2>
                                                <p className="text-sm text-gray-500">Partner stores in your vicinity.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Navigation size={16} className="text-gray-400 dark:text-gray-500" />
                                            <select
                                                value={distanceFilter}
                                                onChange={(e) => setDistanceFilter(e.target.value)}
                                                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer transition-colors"
                                            >
                                                <option value="1">Within 1 km</option>
                                                <option value="5">Within 5 km</option>
                                                <option value="10">Within 10 km</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {filteredStores.map(store => (
                                            <div key={store.id} className="border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl p-5 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 dark:text-white">{store.name}</h3>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
                                                            <MapPin size={12} /> {store.distance} away
                                                        </p>
                                                    </div>
                                                    <Badge variant={store.available ? "success" : "neutral"} className="text-[10px] uppercase">
                                                        {store.available ? "Available" : "Busy"}
                                                    </Badge>
                                                </div>
                                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-lg inline-flex items-center gap-1 mb-5 border border-gray-100 dark:border-gray-600">
                                                    Rating: <span className="text-amber-500">★</span> {store.rating}
                                                </div>

                                                <div className="flex gap-3">
                                                    <Button variant="secondary" className="flex-1 justify-center py-2 text-xs">View Products</Button>
                                                    <Button variant="primary" className="flex-1 justify-center py-2 text-xs" disabled={!store.available} onClick={() => setIsModalOpen(true)}>Request Item</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {filteredStores.length === 0 && (
                                        <div className="text-center py-12 px-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                                            <MapPin size={32} className="mx-auto text-gray-400 dark:text-gray-500 mb-3" />
                                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">No stores found</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mt-1">Try expanding your search radius to see more partner stores.</p>
                                        </div>
                                    )}
                                </Card>
                            </div>

                            {/* RIGHT SECTION (Urgent Requests) */}
                            <div className="lg:w-96 flex flex-col gap-6 shrink-0">
                                <Card>
                                    <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-5">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                                            <Truck size={20} className="text-orange-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">Urgent Requests</h2>
                                            <p className="text-sm text-gray-500">Orders from nearby stores.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {requests.filter(r => r.status === 'Pending').map(req => (
                                            <div key={req.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase flex items-center gap-1.5"><MapPin size={12} /> {req.requestingStore}</span>
                                                    {getUrgencyBadge(req.urgency)}
                                                </div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{req.product}</h3>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-4">Qty Needed: <span className="text-indigo-600 dark:text-indigo-400 font-bold">{req.quantity}</span></p>

                                                <div className="flex gap-2">
                                                    <Button variant="primary" className="flex-1 justify-center py-1.5 text-xs bg-emerald-600 border-none hover:bg-emerald-700 shadow-sm shadow-emerald-200 dark:shadow-none" onClick={() => handleAccept(req.id)}>Accept</Button>
                                                    <Button variant="secondary" className="flex-1 justify-center py-1.5 text-xs hover:border-rose-200 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 dark:hover:border-rose-700 dark:hover:text-rose-400" onClick={() => handleDecline(req.id)}>Decline</Button>
                                                </div>
                                            </div>
                                        ))}

                                        {requests.filter(r => r.status === 'Pending').length === 0 && (
                                            <div className="text-center py-8">
                                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">All caught up! No pending requests.</p>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Request Product Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

                        <Card className="relative w-full max-w-md z-10 p-0 overflow-hidden shadow-2xl">
                            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Request Product</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-colors p-1.5 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/30">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <Formik
                                    initialValues={{ product: '', quantity: '', urgency: 'Medium' }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { resetForm }) => {
                                        const newReq = {
                                            id: `REQ-${Date.now()}`,
                                            ...values,
                                            requestingStore: 'My Store',
                                            status: 'Pending'
                                        };
                                        setRequests([newReq, ...requests]);
                                        resetForm();
                                        setIsModalOpen(false);
                                    }}
                                >
                                    {() => (
                                        <Form className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Product Name</label>
                                                <Field name="product" type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="e.g. Fortune Oil 1L" />
                                                <ErrorMessage name="product" component="div" className="text-rose-500 dark:text-rose-400 text-xs font-semibold mt-1" />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Quantity Required</label>
                                                <Field name="quantity" type="number" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Enter quantity" />
                                                <ErrorMessage name="quantity" component="div" className="text-rose-500 dark:text-rose-400 text-xs font-semibold mt-1" />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Urgency Level</label>
                                                <Field as="select" name="urgency" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium text-gray-900 dark:text-white transition-all cursor-pointer">
                                                    <option value="High">High (Need immediately)</option>
                                                    <option value="Medium">Medium (Need today)</option>
                                                    <option value="Low">Low (Need tomorrow)</option>
                                                </Field>
                                                <ErrorMessage name="urgency" component="div" className="text-rose-500 dark:text-rose-400 text-xs font-semibold mt-1" />
                                            </div>

                                            <div className="pt-2 flex gap-3">
                                                <Button variant="secondary" className="flex-1 justify-center py-2.5" type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                                <Button variant="primary" className="flex-1 justify-center py-2.5 shadow-md shadow-indigo-200" type="submit">Submit Request</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NearbySupplyPage;
