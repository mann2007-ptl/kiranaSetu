import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'

function Footer() {
  return (
    <footer style={{
      background: '#0F172A', color: 'white',
      padding: '48px 24px'
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <StorefrontIcon style={{ color: '#6366F1', fontSize: 26 }} />
          <span style={{ fontWeight: 700, fontSize: 18 }}>
            Kirana<span style={{ color: '#6366F1' }}>Setu</span>
          </span>
        </div>
        <p style={{ color: '#94A3B8', fontSize: 14 }}>
          Built with love for Indian kirana store owners
        </p>
        <p style={{ color: '#64748B', fontSize: 12 }}>
          &copy; {new Date().getFullYear()} KiranaSetu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer