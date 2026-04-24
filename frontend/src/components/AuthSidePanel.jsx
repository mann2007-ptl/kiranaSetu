import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import InventoryIcon from '@mui/icons-material/Inventory'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const FEATURES = [
  {
    icon: <InventoryIcon style={{ color: '#A5B4FC', fontSize: 18 }} />,
    text: 'Smart inventory tracking in real time',
  },
  {
    icon: <BarChartIcon style={{ color: '#A5B4FC', fontSize: 18 }} />,
    text: 'AI-powered sales analytics and forecasting',
  },
  {
    icon: <NotificationsActiveIcon style={{ color: '#A5B4FC', fontSize: 18 }} />,
    text: 'Instant alerts for stock and expiry',
  },
]

function AuthSidePanel() {
  return (
    <div style={{
      width: '45%',
      background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #4338CA 100%)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '48px 44px',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Decorative blurred circles */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 320, height: 320, borderRadius: '50%',
        background: 'rgba(99,102,241,0.18)', filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 280, height: 280, borderRadius: '50%',
        background: 'rgba(99,102,241,0.12)', filter: 'blur(40px)'
      }} />

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, zIndex: 1, marginBottom: 48 }}>
        <StorefrontIcon style={{ color: '#A5B4FC', fontSize: 28 }} />
        <span style={{ color: 'white', fontWeight: 800, fontSize: 20 }}>
          Kirana<span style={{ color: '#A5B4FC' }}>Setu</span>
        </span>
      </div>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(165,180,252,0.12)',
        border: '1px solid rgba(165,180,252,0.25)',
        borderRadius: 999, padding: '5px 12px',
        marginBottom: 20, zIndex: 1, width: 'fit-content'
      }}>
        <AutoAwesomeIcon style={{ color: '#A5B4FC', fontSize: 13 }} />
        <span style={{ color: '#A5B4FC', fontSize: 12, fontWeight: 600 }}>
          AI-Powered Store Management
        </span>
      </div>

      {/* Heading */}
      <h2 style={{
        color: 'white', fontSize: 32, fontWeight: 800,
        lineHeight: 1.3, marginBottom: 14, zIndex: 1
      }}>
        Manage your store{' '}
        <span style={{ color: '#A5B4FC' }}>smarter with AI</span>
      </h2>

      {/* Subtext */}
      <p style={{
        color: '#C7D2FE', fontSize: 14, lineHeight: 1.7,
        marginBottom: 32, zIndex: 1, maxWidth: 320
      }}>
        Join thousands of kirana store owners who save time, reduce waste, and grow revenue.
      </p>

      {/* Feature list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, zIndex: 1, marginBottom: 40 }}>
        {FEATURES.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              background: 'rgba(165,180,252,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {f.icon}
            </div>
            <span style={{ color: '#E0E7FF', fontSize: 13 }}>{f.text}</span>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 16, padding: '18px 20px', zIndex: 1
      }}>
        <p style={{ color: '#C7D2FE', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
          "KiranaSetu helped me reduce stock waste by 40% in just 2 months."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1, #A5B4FC)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: 13, flexShrink: 0
          }}>R</div>
          <div>
            <p style={{ color: 'white', fontSize: 13, fontWeight: 600, margin: 0 }}>Ramesh Patel</p>
            <p style={{ color: '#A5B4FC', fontSize: 11, margin: 0 }}>Patel General Store, Ahmedabad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthSidePanel