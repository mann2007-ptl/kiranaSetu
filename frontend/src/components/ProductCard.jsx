import React from 'react';
import Card from './Card';
import Badge from './Badge';

const ProductCard = ({ product, onAddToCart }) => {
    const isOutOfStock = product.stock === 0;

    return (
        <Card
            className={`flex flex-col cursor-pointer group ${isOutOfStock ? 'opacity-60 pointer-events-none' : 'hover:-translate-y-1'}`}
            onClick={() => !isOutOfStock && onAddToCart(product)}
        >
            {/* Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 mb-3">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                    <div className="absolute top-2 left-2">
                        <Badge variant={product.badge === 'Best Seller' ? 'primary' : 'success'}>
                            {product.badge}
                        </Badge>
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate mb-1">
                    {product.name}
                </h4>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                    <span className={`text-xs font-medium ${product.stock < 20 ? 'text-rose-500' : 'text-gray-400 dark:text-gray-500'}`}>
                        {isOutOfStock ? 'Out of stock' : `${product.stock} left`}
                    </span>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;
