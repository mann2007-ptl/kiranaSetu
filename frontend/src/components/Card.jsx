import React from 'react';

const Card = ({ children, className = '', noPadding = false, ...props }) => {
    return (
        <div
            {...props}
            className={`
        bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
        transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)]
        ${noPadding ? '' : 'p-6'} 
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;

