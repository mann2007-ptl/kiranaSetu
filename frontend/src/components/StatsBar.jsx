import React from 'react'

const STATS = [
  { value: '50,000+', label: 'Products Tracked' },
  { value: '2,800+',  label: 'Active Stores' },
  { value: '99.9%',   label: 'Uptime' },
  { value: 'Rs.12Cr+', label: 'Sales Processed' },
]

function StatsBar() {
  return (
    <section style={{ padding: '0 24px', marginBottom: 80 }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        background: 'linear-gradient(135deg, #4338CA, #6366F1)',
        borderRadius: 24, padding: '40px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 32
      }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 36, fontWeight: 800, color: 'white', margin: 0 }}>
              {stat.value}
            </p>
            <p style={{ fontSize: 14, color: '#C7D2FE', marginTop: 4 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar