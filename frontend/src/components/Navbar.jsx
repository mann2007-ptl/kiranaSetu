import React, { useState, useEffect } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { useNavigate, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleScrollTo = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <StorefrontIcon className="text-indigo-600 !text-[28px]" />
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            Kirana<span className="font-extrabold text-indigo-600">Setu</span>
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-gray-700 dark:text-gray-300"
        >
          ☰
        </button>

        {/* Links & Actions */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-5 md:gap-10
          absolute md:relative top-16 md:top-0 left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent
          p-6 md:p-0 shadow-lg md:shadow-none z-40`}>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {[['Features', 'features'], ['How It Works', 'how-it-works']].map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleScrollTo(id)}
                className="relative bg-transparent border-none cursor-pointer text-gray-500 dark:text-gray-400 text-[15px] font-semibold
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full
                  after:bg-indigo-600 after:transition-all after:duration-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            <button
              onClick={() => navigate('/login')}
              className="bg-transparent border-none cursor-pointer text-gray-500 dark:text-gray-400 text-[15px] font-semibold px-3 py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-2 rounded-xl font-semibold
                hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar