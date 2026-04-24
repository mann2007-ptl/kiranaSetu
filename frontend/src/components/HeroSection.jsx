import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()
  return (
    <section id="hero" className="relative pt-28 pb-20 bg-white overflow-hidden">

      {/* Background blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-7">
            <span className="w-2 h-2 bg-lime-600 rounded-full" />
            AI-powered for your store
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-100 text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Kirana-store,<br />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              supercharged
            </span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-200 text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
            Experience the ease of AI-automated inventory management. We bridge the gap between complex tech and your daily shop operations.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in-up delay-300 flex gap-4 mb-12 flex-wrap">
            <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-4 rounded-full text-base font-bold
                cursor-pointer shadow-lg shadow-indigo-300/40 hover:shadow-xl hover:shadow-indigo-300/50
                hover:-translate-y-0.5 transition-all duration-300 border-none"
            >
              Get Started Free
            </button>
            <button
              className="bg-white text-indigo-600 border border-indigo-100 px-10 py-4 rounded-full text-base font-bold
                cursor-pointer shadow-sm hover:border-indigo-300 hover:shadow-md
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="opacity-0 animate-fade-in-up delay-300 flex items-center gap-10 flex-wrap">
            {[
              { val: '10K+', color: 'bg-amber-400', label: 'happy owners' },
              { val: '50+', color: 'bg-indigo-600', label: 'cities active' },
              { val: '100%', color: 'bg-emerald-500', label: 'fresh guarantee' },
            ].map((s) => (
              <div key={s.label}>
                <h3 className="text-2xl font-black text-gray-900 mb-1">{s.val}</h3>
                <div className={`w-8 h-0.5 ${s.color} mb-1.5`} />
                <p className="text-gray-500 text-xs font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="flex justify-center relative opacity-0 animate-fade-in-up">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=900&q=90"
              alt="Kirana Store Interior"
              loading="lazy"
              className="w-full h-auto max-h-[540px] object-cover"
            />
            {/* Floating glass badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-md flex items-center gap-1.5">
              ✦ AI-Powered
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection