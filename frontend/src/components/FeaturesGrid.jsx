import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import OpenWithIcon from '@mui/icons-material/OpenWith';

function FeaturesGrid() {
  return (
    <section id="features" style={{ padding: '40px 24px', marginBottom: 60 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Top Row */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>

          {/* AI Forecasting Card */}
          <div style={{
            flex: '1.5', minWidth: 320, background: 'white', borderRadius: 24, padding: '32px 40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ background: '#EEF2FF', width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <ShowChartIcon style={{ color: '#4338CA' }} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>AI Forecasting</h3>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.6, marginBottom: 32 }}>
              Our neural network analyzes local purchasing patterns, seasonal trends, and upcoming holidays to predict exactly what your customers will buy tomorrow.
            </p>
            <div style={{ marginTop: 'auto', borderRadius: 16, overflow: 'hidden' }}>
              <img src="/ai_chart.png" alt="AI Chart" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 200, objectFit: 'cover' }} />
            </div>
          </div>

          {/* Smart Alerts Card */}
          <div style={{
            flex: '1', minWidth: 300, background: '#F8FAFC', borderRadius: 24, padding: '32px 40px',
            border: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ background: '#FFEDD5', width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <NotificationsActiveIcon style={{ color: '#EA580C' }} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Smart Alerts</h3>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.6, marginBottom: 40 }}>
              Real-time notifications sent straight to your phone when stocks are low or when high-margin opportunities arise.
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: 'white', padding: '16px 20px', borderRadius: 12, boxShadow: '0 4px 14px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }}></div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>LOW STOCK: Amul Milk</span>
              </div>
              <div style={{ background: 'white', padding: '16px 20px', borderRadius: 12, boxShadow: '0 4px 14px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4338CA' }}></div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>DEMAND SPIKE: Turmeric</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Wide Card */}
        <div style={{
          background: '#1A1D20', borderRadius: 24, padding: '40px 60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40
        }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ background: '#2D3136', width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <OpenWithIcon style={{ color: '#F8FAFC' }} />
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 16 }}>Seamless Tracking</h3>
            <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.6, maxWidth: 440 }}>
              Integrated barcode scanning and manual entry systems that sync instantly. Monitor your warehouse or back-room inventory from anywhere in the world.
            </p>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="/phone_app.png" alt="Phone App" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturesGrid;