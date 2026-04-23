import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const STEPS = [
  {
    number: '01',
    icon: <AddBoxIcon style={{ fontSize: 32, color: '#4338CA' }} />,
    title: 'Add Products',
    desc: 'Quickly add products with names, prices, and quantities. Import in bulk or scan barcodes.',
  },
  {
    number: '02',
    icon: <PointOfSaleIcon style={{ fontSize: 32, color: '#4338CA' }} />,
    title: 'Track Sales',
    desc: 'Record every sale instantly. Dashboard updates in real time so stock is always accurate.',
  },
  {
    number: '03',
    icon: <AutoAwesomeIcon style={{ fontSize: 32, color: '#4338CA' }} />,
    title: 'Get AI Insights',
    desc: 'AI analyses your data and gives clear suggestions on what to restock and what is trending.',
  },
]

function Step({ number, icon, title, desc }) {
  return (
    <div style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}>
      <div style={{
        position: 'relative', width: 80, height: 80,
        borderRadius: 20, background: '#EEF2FF',
        border: '2px solid #C7D2FE',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', margin: '0 auto 20px'
      }}>
        {icon}
        <span style={{
          position: 'absolute', top: -10, right: -10,
          width: 26, height: 26, borderRadius: '50%',
          background: '#4338CA', color: 'white',
          fontSize: 11, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {number}
        </span>
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

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '0 24px', marginBottom: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: '#4338CA', fontWeight: 600, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>
            How It Works
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>
            Up and running in 3 simple steps
          </h2>
          <p style={{ fontSize: 16, color: '#475569', maxWidth: 440, margin: '0 auto' }}>
            No technical knowledge needed. Start managing your store smarter today.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          {STEPS.map((step, index) => (
            <React.Fragment key={index}>
              <Step {...step} />
              {index < STEPS.length - 1 && (
                <div style={{
                  flex: '0 0 40px', borderTop: '2px dashed #C7D2FE',
                  marginTop: 40, alignSelf: 'flex-start'
                }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <button className="btn-primary" style={{ padding: '14px 40px', fontSize: 15 }}>
            Start Your Free Trial Today
          </button>
          <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 12 }}>
            No credit card · 30-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks