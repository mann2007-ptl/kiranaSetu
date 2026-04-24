import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const BENEFITS = [
  'Free for 30 days — no credit card required',
  'Setup your store in under 5 minutes',
  'AI demand forecasting from day one',
  'Real-time stock alerts and insights',
  'Trusted by 2,800+ kirana store owners',
]

const STATS = [
  { value: '2,800+', label: 'Active Stores' },
  { value: '40%',    label: 'Waste Reduced' },
  { value: '99.9%',  label: 'Uptime' },
]

function SignupSidePanel() {
  return (
    <div style={{
      width: '45%',
      height: '100%',
      background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #4338CA 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 44px',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>

      {/* Decorative circles */}
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
      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 10, zIndex: 1, marginBottom: 40
      }}>
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
        marginBottom: 18, zIndex: 1, width: 'fit-content'
      }}>
        <AutoAwesomeIcon style={{ color: '#A5B4FC', fontSize: 13 }} />
        <span style={{ color: '#A5B4FC', fontSize: 12, fontWeight: 600 }}>
          Join 2,800+ Store Owners
        </span>
      </div>

      {/* Heading */}
      <h2 style={{
        color: 'white', fontSize: 30, fontWeight: 800,
        lineHeight: 1.3, marginBottom: 12, zIndex: 1
      }}>
        Start growing your store{' '}
        <span style={{ color: '#A5B4FC' }}>with AI today</span>
      </h2>

      {/* Subtext */}
      <p style={{
        color: '#C7D2FE', fontSize: 14, lineHeight: 1.7,
        marginBottom: 28, zIndex: 1, maxWidth: 320
      }}>
        Everything you need to manage inventory, track sales, and make smarter decisions — all in one place.
      </p>

      {/* Benefits list */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        gap: 12, zIndex: 1, marginBottom: 36
      }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <CheckCircleIcon style={{ color: '#A5B4FC', fontSize: 18, flexShrink: 0 }} />
            <span style={{ color: '#E0E7FF', fontSize: 13 }}>{b}</span>
          </div>
        ))}
      </div>

      {/* Stats row */}
     <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 16,
  padding: '18px 10px',
  zIndex: 1
}}>
  {STATS.map((s, i) => (
    <div key={i} style={{
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      borderRight: i < STATS.length - 1
        ? '1px solid rgba(255,255,255,0.1)'
        : 'none'
    }}>
      <span style={{
        color: 'white',
        fontSize: 22,
        fontWeight: 800,
        lineHeight: 1
      }}>
        {s.value}
      </span>

      <span style={{
        color: '#A5B4FC',
        fontSize: 12,
        fontWeight: 500
      }}>
        {s.label}
      </span>
    </div>
  ))}
</div>
    </div>
  )
}

export default SignupSidePanel