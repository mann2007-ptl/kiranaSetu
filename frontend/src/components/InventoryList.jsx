import React from 'react';
import Card from './Card';
import Badge from './Badge';
import { inventoryList } from '../data/mockData';

const InventoryList = () => {
    return (
        <Card className="h-full flex flex-col" noPadding>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Inventory Status</h3>
                    <p className="text-sm text-gray-500 mt-1">Real-time overview of key items</p>
                </div>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                    View All
                </button>
            </div>

            <div className="flex-1 overflow-auto max-h-[400px] lg:max-h-none custom-scrollbar">
                <div className="flex flex-col">
                    {inventoryList.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-4 lg:p-5 border-b border-gray-50 hover:bg-gray-50/80 transition-colors duration-200 last:border-0"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-[15px] font-semibold text-gray-900 truncate">
                                    {item.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-gray-500">{item.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span className="text-xs font-medium text-gray-700">{item.price}</span>
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
