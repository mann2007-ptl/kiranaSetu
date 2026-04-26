import React, { useState, useMemo } from 'react';
import Card from './Card';
import Badge from './Badge';
import { MoreVertical, Filter } from 'lucide-react';
import { inventoryProducts } from '../data/mockData';

const ITEMS_PER_PAGE = 5;
const categories = ['All', 'Dairy', 'Snacks', 'Staples'];

const getStockColor = (percent) => {
    if (percent > 60) return 'bg-emerald-500';
    if (percent >= 30) return 'bg-amber-400';
    return 'bg-rose-500';
};

const getStockTrackColor = (percent) => {
    if (percent > 60) return 'bg-emerald-100';
    if (percent >= 30) return 'bg-amber-100';
    return 'bg-rose-100';
};

const getStatusBadge = (status) => {
    switch (status) {
        case 'normal':
            return <Badge variant="success">In Stock</Badge>;
        case 'low':
            return <Badge variant="warning">Low Stock</Badge>;
        case 'critical':
            return <Badge variant="danger">Critical</Badge>;
        case 'out':
            return <Badge variant="neutral">Out of Stock</Badge>;
        default:
            return <Badge variant="primary">{status}</Badge>;
    }
};

const InventoryTable = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return inventoryProducts;
        return inventoryProducts.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paginated = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <Card noPadding className="flex flex-col">
            {/* Filters Bar */}
            <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                                ${activeCategory === cat
                                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
                    <Filter size={14} />
                    More Filters
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full min-w-[640px]">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Product</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Category</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Stock Level</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Status</th>
                            <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3.5">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map((product) => {
                            const percent = product.maxStock > 0
                                ? Math.round((product.stock / product.maxStock) * 100)
                                : 0;
                            return (
                                <tr
                                    key={product.id}
                                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors duration-200"
                                >
                                    {/* Product */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="shrink-0 w-10 h-10 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{product.sku}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-600 font-medium">{product.category}</span>
                                    </td>

                                    {/* Stock Level */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3 min-w-[140px]">
                                            <div className={`flex-1 h-2 rounded-full ${getStockTrackColor(percent)}`}>
                                                <div
                                                    className={`h-full rounded-full transition-all duration-500 ${getStockColor(percent)}`}
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-700 w-12 text-right">
                                                {product.stock}/{product.maxStock}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        {getStatusBadge(product.status)}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-medium">
                        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
                    </p>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                                    ${page === currentPage
                                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </Card>
    );
};

export default InventoryTable;
