import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide';

    const variants = {
        primary: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
        success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
        danger: 'bg-rose-50 text-rose-700 border border-rose-100',
        warning: 'bg-amber-50 text-amber-700 border border-amber-100',
        neutral: 'bg-gray-100 text-gray-700 border border-gray-200'
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
