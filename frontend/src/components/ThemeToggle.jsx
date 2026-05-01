import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

/**
 * Animated pill-style theme toggle button.
 * Shows a sun icon in dark mode and a moon icon in light mode.
 */
const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`
        relative flex items-center w-[52px] h-7 rounded-full p-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${isDark
                    ? 'bg-indigo-600 focus:ring-offset-gray-900'
                    : 'bg-gray-200 focus:ring-offset-white'}
      `}
        >
            {/* Sliding knob */}
            <span
                className={`
          flex items-center justify-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${isDark ? 'translate-x-[24px] bg-white' : 'translate-x-0 bg-white'}
        `}
            >
                {isDark ? (
                    <Moon size={13} className="text-indigo-600" strokeWidth={2.5} />
                ) : (
                    <Sun size={13} className="text-amber-500" strokeWidth={2.5} />
                )}
            </span>
        </button>
    )
}

export default ThemeToggle
