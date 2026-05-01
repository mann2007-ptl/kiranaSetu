import React from 'react'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import OpenWithIcon from '@mui/icons-material/OpenWith'

function FeaturesGrid() {
  return (
    <section id="features" className="py-10 px-6 mb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Simple steps to store{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              intelligence.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* AI Forecasting Card — always dark (brand card) */}
          <div className="group bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 dark:border-gray-700 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up">
            <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <ShowChartIcon className="!text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Forecasting</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our neural network analyzes local purchasing patterns, seasonal trends, and upcoming holidays to predict exactly what your customers will buy tomorrow.
            </p>
            <div className="mt-auto rounded-2xl overflow-hidden">
              <img src="/ai_chart.png" alt="AI Forecasting Chart" loading="lazy" className="w-full h-auto max-h-[200px] object-cover" />
            </div>
          </div>

          {/* Smart Alerts Card */}
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up delay-100">
            <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <NotificationsActiveIcon className="!text-orange-500 group-hover:!text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smart Alerts</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Real-time notifications sent straight to your phone when stocks are low or when high-margin opportunities arise.
            </p>
            <div className="mt-auto flex flex-col gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center gap-3 border border-gray-100 dark:border-gray-700">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  LOW STOCK
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">Amul Milk</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center gap-3 border border-gray-100 dark:border-gray-700">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  DEMAND SPIKE
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">Turmeric</span>
              </div>
            </div>
          </div>

          {/* Seamless Tracking — always dark brand card */}
          <div className="md:col-span-2 bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-10 flex items-center justify-between flex-wrap gap-10 opacity-0 animate-fade-in-up delay-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-gray-700">
            <div className="flex-1 min-w-[300px]">
              <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center mb-6">
                <OpenWithIcon className="!text-gray-100" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4">Seamless Tracking</h3>
              <p className="text-gray-400 leading-relaxed max-w-[440px]">
                Integrated barcode scanning and manual entry systems that sync instantly. Monitor your warehouse or back-room inventory from anywhere in the world.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/[0.02] flex items-center justify-center overflow-hidden">
                <img src="/phone_app.png" alt="Phone App" loading="lazy" className="w-full h-full object-cover rounded-[40px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid