import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import InventoryIcon from '@mui/icons-material/Inventory'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const FEATURES = [
  {
    icon: <InventoryIcon className="!text-indigo-300 !text-lg" />,
    text: 'Smart inventory tracking in real time',
  },
  {
    icon: <BarChartIcon className="!text-indigo-300 !text-lg" />,
    text: 'AI-powered sales analytics and forecasting',
  },
  {
    icon: <NotificationsActiveIcon className="!text-indigo-300 !text-lg" />,
    text: 'Instant alerts for stock and expiry',
  },
]

function AuthSidePanel() {
  return (
    <div className="hidden lg:flex flex-col justify-center p-11 relative overflow-hidden z-0">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=900&q=90"
        alt="Store Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-[4px] -z-10" />

      {/* Logo */}
      <div className="flex items-center gap-2.5 z-10 mb-12">
        <StorefrontIcon className="!text-indigo-300 !text-[28px]" />
        <span className="text-white font-extrabold text-xl">
          Kirana<span className="text-indigo-300">Setu</span>
        </span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-indigo-300/10 border border-indigo-300/25 rounded-full px-3 py-1 mb-5 z-10 w-fit">
        <AutoAwesomeIcon className="!text-indigo-300 !text-[13px]" />
        <span className="text-indigo-300 text-xs font-semibold">AI-Powered Store Management</span>
      </div>

      {/* Heading */}
      <h2 className="text-white text-3xl font-extrabold leading-snug mb-3.5 z-10">
        Kirana-scale.<br />Verified.<br />
        <span className="text-green-400">Delivered.</span>
      </h2>

      {/* Subtext */}
      <p className="text-indigo-200 text-sm leading-relaxed mb-8 z-10 max-w-xs">
        Join thousands of kirana store owners who save time, reduce waste, and grow revenue.
      </p>

      {/* Feature list */}
      <div className="flex flex-col gap-3.5 z-10 mb-10">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg shrink-0 bg-indigo-300/10 flex items-center justify-center">
              {f.icon}
            </div>
            <span className="text-indigo-100 text-sm">{f.text}</span>
          </div>
        ))}
      </div>

      {/* Feature pills */}
      <div className="flex gap-3 flex-wrap z-10">
        {[
          { t: '95% Accuracy', s: 'AI demand forecast' },
          { t: 'Auto-Sync', s: 'Live dashboard' },
          { t: 'Direct ROI', s: 'Zero manual counting' },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 flex-1 min-w-[100px]">
            <span className="text-green-400 text-sm">✦</span>
            <h4 className="text-white text-sm font-semibold mt-1">{item.t}</h4>
            <p className="text-gray-400 text-[11px] mt-0.5">{item.s}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuthSidePanel