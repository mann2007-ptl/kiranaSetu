import React from 'react';

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '80px 24px', background: '#F8FAFC' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 60 }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: '#0F172A', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              Simple steps to store intelligence.
            </h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.6 }}>
              We've designed KiranaAI to fit into your existing workflow, not disrupt it.
            </p>
          </div>
          <button style={{
            background: '#4338CA', color: 'white', fontWeight: 600, fontSize: 15,
            padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer'
          }}>
            See Full Demo
          </button>
        </div>

        {/* 3 Steps Row */}
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 100 }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 style={{ fontSize: 80, fontWeight: 900, color: '#E2E8F0', margin: '0 0 -10px', lineHeight: 1 }}>01</h1>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>Connect Your Sales</h3>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
              Sync your existing POS or use our simplified manual entry to track what's leaving your shelves.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 style={{ fontSize: 80, fontWeight: 900, color: '#E2E8F0', margin: '0 0 -10px', lineHeight: 1 }}>02</h1>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>AI Processing</h3>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
              Our engine calculates lead times, safety stocks, and demand velocity automatically for every SKU.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 style={{ fontSize: 80, fontWeight: 900, color: '#E2E8F0', margin: '0 0 -10px', lineHeight: 1 }}>03</h1>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>Optimize & Scale</h3>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
              Receive automated purchase lists and margin optimization tips every morning before you open.
            </p>
          </div>
        </div>

        {/* Big CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #4338CA, #5B21B6)', borderRadius: 24, padding: '72px 40px',
          textAlign: 'center', color: 'white'
        }}>
          <h2 style={{ fontSize: 44, fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Ready to transform<br />your Kirana?
          </h2>
          <p style={{ fontSize: 16, margin: '0 auto 40px', maxWidth: 640, color: '#E0E7FF' }}>
            Join 5,000+ local store owners who have reduced inventory waste by 30% using KiranaAI.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button style={{
              background: 'white', color: '#4338CA', fontWeight: 800, fontSize: 15,
              padding: '14px 32px', borderRadius: 8, border: 'none', cursor: 'pointer'
            }}>
              Get Started for Free
            </button>
            <button style={{
              background: '#5b21b6', color: 'white', fontWeight: 600, fontSize: 15,
              padding: '14px 32px', borderRadius: 8, border: '1px solid #7c3aed', cursor: 'pointer'
            }}>
              Schedule a Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;