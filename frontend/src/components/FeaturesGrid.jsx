import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const FEATURES = [
  {
    icon: <InventoryIcon style={{ fontSize: 28, color: '#4338CA' }} />,
    bg: '#EEF2FF',
    title: 'Smart Inventory',
    desc: 'Track every product in real time. Never run out of high-demand items again.',
  },
  {
    icon: <QueryStatsIcon style={{ fontSize: 28, color: '#10B981' }} />,
    bg: '#ECFDF5',
    title: 'Demand Forecasting',
    desc: 'AI predicts which products will sell more based on season and local trends.',
  },
  {
    icon: <BarChartIcon style={{ fontSize: 28, color: '#F59E0B' }} />,
    bg: '#FFFBEB',
    title: 'Sales Analytics',
    desc: 'Visual charts showing your best sellers, peak hours, and daily revenue.',
  },
  {
    icon: <NotificationsActiveIcon style={{ fontSize: 28, color: '#EF4444' }} />,
    bg: '#FEF2F2',
    title: 'Smart Alerts',
    desc: 'Instant alerts for low stock, expiry dates, and unusual sales drops.',
  },
]

function FeatureCard({ icon, bg, title, desc }) {
  return (
    <div className="card-hover" style={{
      background: 'white', borderRadius: 20,
      padding: 24, border: '1px solid #E5E7EB'
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: bg, display: 'flex',
        alignItems: 'center', justifyContent: 'center', marginBottom: 16
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  )
}

function FeaturesGrid() {
  return (
    <section id="features" style={{ padding: '0 24px', marginBottom: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#4338CA', fontWeight: 600, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>
            Features
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>
            Everything your store needs
          </h2>
          <p style={{ fontSize: 16, color: '#475569', maxWidth: 480, margin: '0 auto' }}>
            Powerful tools designed for kirana store owners to save time and grow smarter.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid