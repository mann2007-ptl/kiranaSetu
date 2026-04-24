import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const BENEFITS = [
  'Free for 30 days — no credit card required',
  'Setup your store in under 5 minutes',
  'AI demand forecasting from day one',
  'Real-time stock alerts and insights',
  'Trusted by 2,800+ kirana store owners',
]

const STATS = [
  { value: '2,800+', label: 'Active Stores' },
  { value: '40%', label: 'Waste Reduced' },
  { value: '99.9%', label: 'Uptime' },
]

function SignupSidePanel() {
  return (
    <div className="hidden lg:flex flex-col justify-center p-11 relative overflow-hidden shrink-0 z-0">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=900&q=90"
        alt="Store Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-[4px] -z-10" />

      {/* Logo */}
      <div className="flex items-center gap-2.5 z-10 mb-10">
        <StorefrontIcon className="!text-indigo-300 !text-[28px]" />
        <span className="text-white font-extrabold text-xl">
          Kirana<span className="text-indigo-300">Setu</span>
        </span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-indigo-300/10 border border-indigo-300/25 rounded-full px-3 py-1 mb-4 z-10 w-fit">
        <AutoAwesomeIcon className="!text-indigo-300 !text-[13px]" />
        <span className="text-indigo-300 text-xs font-semibold">Join 2,800+ Store Owners</span>
      </div>

      {/* Heading */}
      <h2 className="text-white text-[30px] font-extrabold leading-snug mb-3 z-10">
        Start growing your store{' '}
        <span className="text-indigo-300">with AI today</span>
      </h2>

      {/* Subtext */}
      <p className="text-indigo-200 text-sm leading-relaxed mb-7 z-10 max-w-xs">
        Everything you need to manage inventory, track sales, and make smarter decisions — all in one place.
      </p>

      {/* Benefits list */}
      <div className="flex flex-col gap-3 z-10 mb-9">
        {BENEFITS.map((b, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <CheckCircleIcon className="!text-indigo-300 !text-lg shrink-0" />
            <span className="text-indigo-100 text-sm">{b}</span>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="flex items-center bg-white/[0.07] border border-white/10 rounded-2xl py-4 px-2.5 z-10">
        {STATS.map((s, i) => (
          <div key={i} className={`flex-1 text-center flex flex-col items-center justify-center gap-1 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}>
            <span className="text-white text-xl font-extrabold leading-none">{s.value}</span>
            <span className="text-indigo-300 text-xs font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SignupSidePanel