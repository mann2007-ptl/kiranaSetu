import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import InventoryIcon from '@mui/icons-material/Inventory'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

// Small floating card inside the dashboard mock
function DashCard({ icon, label, value, bg }) {
  return (
    <div style={{
      background: 'white', borderRadius: 16, padding: '12px 16px',
      display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,0.10)', minWidth: 160
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: 11, color: '#475569', margin: 0 }}>{label}</p>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: 0 }}>{value}</p>
      </div>
    </div>
  )
}

// Mini dashboard shown on the right
function DashboardMock() {
  return (
    <div style={{ position: 'relative', width: 300, margin: '0 auto' }}>

      {/* Main card */}
      <div style={{
        background: 'white', borderRadius: 24,
        padding: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
        border: '1px solid #F1F5F9'
      }}>
        <p style={{ fontSize: 12, color: '#475569', margin: '0 0 4px' }}>Today's Revenue</p>
        <p className="gradient-text" style={{ fontSize: 36, fontWeight: 800, margin: 0 }}>
          Rs. 24,580
        </p>
        <p style={{ fontSize: 12, color: '#10B981', margin: '4px 0 16px' }}>
          Up 12.4% vs yesterday
        </p>

        {/* Bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60 }}>
          {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
            <div key={i} style={{
              flex: 1, borderRadius: 4,
              height: `${h}%`,
              background: i === 5 ? '#4338CA' : '#E0E7FF'
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 4 }}>
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <span key={i} style={{
              flex: 1, textAlign: 'center',
              fontSize: 10, color: '#94A3B8'
            }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div style={{ position: 'absolute', top: 16, left: -140 }}>
        <DashCard
          icon={<InventoryIcon style={{ color: '#6366F1', fontSize: 18 }} />}
          label="Low Stock" value="3 items" bg="#EEF2FF"
        />
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: -130 }}>
        <DashCard
          icon={<TrendingUpIcon style={{ color: '#10B981', fontSize: 18 }} />}
          label="Top Seller" value="Maggi" bg="#ECFDF5"
        />
      </div>
      <div style={{ position: 'absolute', bottom: -20, left: -100 }}>
        <DashCard
          icon={<AutoAwesomeIcon style={{ color: '#F59E0B', fontSize: 18 }} />}
          label="AI Insight" value="Restock sugar" bg="#FFFBEB"
        />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="hero" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center',
        gap: 60, flexWrap: 'wrap'
      }}>

        {/* Left */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#EEF2FF', border: '1px solid #C7D2FE',
            color: '#4338CA', fontSize: 12, fontWeight: 600,
            padding: '6px 14px', borderRadius: 999, marginBottom: 20
          }}>
            <AutoAwesomeIcon style={{ fontSize: 13 }} />
            AI-Powered Store Management
          </div>

          <h1 className="fade-up-1" style={{
            fontSize: 48, fontWeight: 800, lineHeight: 1.2,
            color: '#0F172A', marginBottom: 20
          }}>
            Your Kirana Store,{' '}
            <span className="gradient-text">Supercharged</span>{' '}
            with AI
          </h1>

          <p className="fade-up-2" style={{
            fontSize: 17, color: '#475569', lineHeight: 1.7,
            maxWidth: 480, marginBottom: 28
          }}>
            Manage inventory, predict demand, and grow sales — all from one smart
            dashboard built for Indian kirana store owners.
          </p>

          <div className="fade-up-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Trial
            </button>
            <button className="btn-secondary">View Demo →</button>
          </div>

          <p className="fade-up-3" style={{ fontSize: 12, color: '#94A3B8', marginTop: 16 }}>
            No credit card required · Setup in 5 minutes · Free for 30 days
          </p>
        </div>

        {/* Right */}
        <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center', padding: '40px 60px' }}>
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}

export default HeroSection