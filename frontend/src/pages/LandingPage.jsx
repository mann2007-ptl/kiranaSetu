import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsBar from '../components/StatsBar'
import FeaturesGrid from '../components/FeaturesGrid'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
            <Navbar />
            <main>
                <HeroSection />
                <StatsBar />
                <FeaturesGrid />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage