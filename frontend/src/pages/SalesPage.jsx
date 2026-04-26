import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import ProductCard from '../components/ProductCard';
import CartPanel from '../components/CartPanel';
import { Search, Filter } from 'lucide-react';
import { salesProducts } from '../data/mockData';

const categories = ['All', 'Dairy', 'Snacks', 'Staples'];

const SalesPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [cartItems, setCartItems] = useState([]);

    /* ─── Filtered Products ─────────────────────────── */
    const filtered = useMemo(() => {
        let list = salesProducts;
        if (activeCategory !== 'All') {
            list = list.filter((p) => p.category === activeCategory);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            list = list.filter((p) =>
                p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
            );
        }
        return list;
    }, [activeCategory, searchQuery]);

    /* ─── Cart Handlers ─────────────────────────────── */
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, newQty) => {
        if (newQty < 1) {
            removeItem(id);
            return;
        }
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 font-sans">

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen min-w-0">

                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-8 sm:px-6 lg:px-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Point of Sale</h1>
                            <p className="mt-1.5 text-sm sm:text-base text-gray-500 font-medium">Quick billing and order management</p>
                        </div>

                        {/* Two-Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

                            {/* LEFT — Product Selection */}
                            <div className="space-y-5">
                                {/* Search + Filters */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1 relative group">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                            <Search size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search products, SKUs, or categories..."
                                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-400 font-medium shadow-sm"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 flex-wrap">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
                                                    ${activeCategory === cat
                                                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Product Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                                    {filtered.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onAddToCart={addToCart}
                                        />
                                    ))}
                                </div>

                                {filtered.length === 0 && (
                                    <div className="text-center py-16">
                                        <p className="text-sm font-medium text-gray-400">No products found</p>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT — Cart Panel */}
                            <CartPanel
                                cartItems={cartItems}
                                onUpdateQuantity={updateQuantity}
                                onRemoveItem={removeItem}
                            />
                        </div>

                        <div className="h-8"></div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SalesPage;
