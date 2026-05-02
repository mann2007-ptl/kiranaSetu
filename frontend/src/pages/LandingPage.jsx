import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsBar from '../components/StatsBar'
import FeaturesGrid from '../components/FeaturesGrid'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
            <Helmet>
                <title>KiranaSetu — AI-Powered Kirana Store Management Platform</title>
                <meta name="description" content="Transform your kirana store with AI-powered inventory management, demand forecasting, and real-time sales analytics. Free forever for Indian shopkeepers." />
                <link rel="canonical" href="https://kiranasetu.vercel.app/" />
            </Helmet>
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
