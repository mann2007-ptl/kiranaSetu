import React from 'react'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt'
import ShieldIcon from '@mui/icons-material/Shield'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AutorenewIcon from '@mui/icons-material/Autorenew'

function StatsBar() {
  const features = [
    { icon: <OfflineBoltIcon fontSize="large" />, title: 'Zero Stockouts', desc: 'Never lose a customer' },
    { icon: <TrendingUpIcon fontSize="large" />, title: 'Margin Growth', desc: 'Optimize your pricing' },
    { icon: <AutorenewIcon fontSize="large" />, title: 'Auto Ordering', desc: 'Predictive refilling' },
    { icon: <ShieldIcon fontSize="large" />, title: 'Secure Sync', desc: 'Cloud data backup' },
  ]

  return (
    <section className="px-4 md:px-16 my-8">
      <div className="max-w-[1100px] mx-auto bg-gray-900 dark:bg-gray-800 rounded-3xl px-8 py-10 shadow-2xl relative overflow-hidden border border-gray-800 dark:border-gray-700">

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none rounded-t-3xl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center opacity-0 animate-fade-in-up duration-500 hover:-translate-y-1 transition-transform
                ${i > 0 ? 'sm:border-l sm:border-gray-700' : ''}
              `}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-indigo-400 mb-4 bg-gray-800 dark:bg-gray-700 p-3.5 rounded-2xl shadow-inner border border-gray-700 dark:border-gray-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar