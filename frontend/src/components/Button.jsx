import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    fullWidth = false,
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[12px] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[#4F46E5] text-white hover:bg-indigo-700 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-[0.98]',
        secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 active:scale-[0.98]',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98]'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-[15px]',
        lg: 'px-6 py-3 text-base'
    };

    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
            {...props}
        >
            {Icon && <Icon className="w-4 h-4 mr-2" />}
            {children}
        </button>
    );
};

export default Button;
