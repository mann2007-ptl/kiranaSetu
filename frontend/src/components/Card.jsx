import React from 'react';

const Card = ({ children, className = '', noPadding = false }) => {
    return (
        <div
            className={`
        bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] 
        transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]
        ${noPadding ? '' : 'p-6'} 
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
