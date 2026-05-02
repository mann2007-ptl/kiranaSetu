import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import InputField from './InputField';
import { useTheme } from '../context/ThemeContext';
import { X } from 'lucide-react';
import { apiFetch } from '../config/api';

const ProductModal = ({ isOpen, onClose, product, onSuccess }) => {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        stock: '',
        maxStock: '',
        price: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                category: product.category || '',
                stock: product.stock !== undefined ? product.stock : '',
                maxStock: product.maxStock !== undefined ? product.maxStock : '',
                price: product.price !== undefined ? product.price : ''
            });
        } else {
            setFormData({ name: '', category: '', stock: '', maxStock: '', price: '' });
        }
    }, [product, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = product ? `/api/products/${product._id || product.id}` : '/api/products';
            const method = product ? 'PUT' : 'POST';

            const res = await apiFetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    category: formData.category,
                    stock: Number(formData.stock),
                    maxStock: Number(formData.maxStock),
                    price: Number(formData.price)
                })
            });

            if (res.ok) {
                onSuccess();
                onClose();
            } else {
                const err = await res.json();
                alert(err.message || 'Operation failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className={`absolute inset-0 transition-opacity bg-gray-900/40 backdrop-blur-sm`} onClick={onClose}></div>

            {/* Modal */}
            <div className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl transition-all ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {product ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                        <input required type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stock</label>
                            <input required type="number" min="0" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Stock</label>
                            <input required type="number" min="1" value={formData.maxStock} onChange={(e) => setFormData({ ...formData, maxStock: e.target.value })} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price (₹)</label>
                        <input required type="number" min="0" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>

                    <div className="mt-4 flex gap-3 justify-end">
                        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="primary" disabled={loading}>
                            {loading ? 'Saving...' : 'Save Product'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
