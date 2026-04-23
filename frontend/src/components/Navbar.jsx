import React, { useState, useEffect } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'white',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
      transition: 'box-shadow 0.3s ease'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 24px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>

        {/* Logo */}
        <div
          onClick={() => scrollTo('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
        >
          <StorefrontIcon style={{ color: '#4338CA', fontSize: 28 }} />
          <span style={{ fontWeight: 700, fontSize: 20, color: '#0F172A' }}>
            Kirana<span className="gradient-text">Setu</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[['Features', 'features'], ['How It Works', 'how-it-works']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#475569', fontSize: 14, fontWeight: 500
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#475569', fontSize: 14, fontWeight: 500, padding: '8px 12px'
          }}>
            Login
          </button>
          <button
            className="btn-primary"
            onClick={() => scrollTo('features')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar