import React from 'react';
import Card from './Card';
import Badge from './Badge';

const InventoryList = () => {
    const [inventoryList, setInventoryList] = React.useState([]);

    React.useEffect(() => {
        const fetchInventoryList = async () => {
            try {
                const res = await fetch('/api/products', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                if (res.ok) {
                    const jsonRes = await res.json();
                    if (jsonRes.success && Array.isArray(jsonRes.data)) {
                        setInventoryList(jsonRes.data.map(p => ({
                            ...p,
                            id: p._id,
                            price: `₹${p.price}`,
                            status: p.stock < 20 ? 'low' : 'normal',
                            image: p.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200&h=200'
                        })));
                    }
                }
            } catch (err) {
                console.error("Products error:", err);
            }
        };
        fetchInventoryList();
    }, []);

    return (
        <Card className="h-full flex flex-col" noPadding>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Inventory Status</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Real-time overview of key items</p>
                </div>
                <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline px-3 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                    View All
                </button>
            </div>

            <div className="flex-1 overflow-auto max-h-[400px] lg:max-h-none custom-scrollbar">
                <div className="flex flex-col">
                    {inventoryList.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-4 lg:p-5 border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50/80 dark:hover:bg-gray-700/40 transition-colors duration-200 last:border-0"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600">
                                <div className="w-full h-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
                                    {item.name.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-semibold text-gray-900 dark:text-white truncate">
                                    {item.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.price}</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                                <Badge variant={item.status === 'low' ? 'danger' : 'success'}>
                                    {item.stock} in stock
                                </Badge>
                                {item.status === 'low' && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                                        Restock
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default InventoryList;
