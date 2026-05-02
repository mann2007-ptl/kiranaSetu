import React from 'react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';
import { Minus, Plus, Trash2, Printer, PercentCircle, ShoppingCart } from 'lucide-react';

const CartPanel = ({ cartItems, onUpdateQuantity, onRemoveItem, onCompleteSale }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Card noPadding className="flex flex-col h-full sticky top-24">
            {/* Header */}
            <div className="p-5 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Current Order</h3>
                <Badge variant="primary">{itemCount} {itemCount === 1 ? 'item' : 'items'}</Badge>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto custom-scrollbar max-h-[340px]">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-[340px] p-5">
                        <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-2xl bg-gray-50/50 dark:bg-gray-800/50">
                            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-center mb-4 text-indigo-500">
                                <ShoppingCart size={28} strokeWidth={1.5} />
                            </div>
                            <p className="text-base font-bold text-gray-900 dark:text-white">Your cart is empty</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 px-4 text-center">
                                Select products from the left to start building your order.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
                        {cartItems.map((item) => (
                            <CartItemRow
                                key={item.id}
                                item={item}
                                onUpdateQuantity={onUpdateQuantity}
                                onRemoveItem={onRemoveItem}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Bill Summary */}
            {cartItems.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-700">
                    <div className="p-5 space-y-2.5">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Subtotal</span>
                            <span className="text-gray-700 dark:text-gray-200 font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">GST (18%)</span>
                            <span className="text-gray-700 dark:text-gray-200 font-semibold">₹{gst.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-700 my-1" />
                        <div className="flex justify-between items-center">
                            <span className="text-base font-bold text-gray-900 dark:text-white">Total</span>
                            <span className="text-xl font-extrabold text-gray-900 dark:text-white">₹{total.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="px-5 pb-5 space-y-2.5">
                        <div className="grid grid-cols-2 gap-2.5">
                            <Button variant="ghost" size="sm" icon={Printer}>Print Draft</Button>
                            <Button variant="secondary" size="sm" icon={PercentCircle}>Discount</Button>
                        </div>
                        <Button variant="primary" size="lg" fullWidth icon={ShoppingCart} onClick={onCompleteSale}>
                            Complete Sale
                        </Button>
                    </div>
                </div>
            )}
        </Card>
    );
};

/* ─── Cart Item Row ────────────────────────────────── */

const CartItemRow = ({ item, onUpdateQuantity, onRemoveItem }) => {
    return (
        <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/60 dark:hover:bg-gray-700/40 transition-colors">
            {/* Icon representation */}
            <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                {item.name.charAt(0).toUpperCase()}
            </div>

            {/* Info & Price */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">₹{item.price} × {item.quantity}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
                <button
                    onClick={() => item.quantity === 1 ? onRemoveItem(item.id) : onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                    {item.quantity === 1 ? <Trash2 size={13} className="text-rose-500" /> : <Minus size={13} />}
                </button>
                <span className="w-6 text-center text-sm font-bold text-gray-900 dark:text-white">{item.quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors cursor-pointer"
                >
                    <Plus size={13} />
                </button>
            </div>

            {/* Line Total */}
            <span className="text-sm font-bold text-gray-900 dark:text-white w-16 text-right shrink-0">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </span>
        </div>
    );
};

export default CartPanel;
