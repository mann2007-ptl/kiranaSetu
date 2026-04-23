import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <Navbar />
       <main>
        <HeroSection />
      
      </main> 
     
    </div>
  )
}

export default LandingPage