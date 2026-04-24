import React from 'react'
import { useNavigate } from 'react-router-dom'

function HowItWorks() {
  const navigate = useNavigate()
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1100px] mx-auto">

        {/* Header Row */}
        <div className="flex justify-between items-start flex-wrap gap-6 mb-16">
          <div className="max-w-[500px]">
            <h2 className="text-4xl md:text-[44px] font-extrabold text-gray-900 leading-[1.1] mb-5 tracking-tight">
              Simple steps to store{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                intelligence.
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We've designed KiranaAI to fit into your existing workflow, not disrupt it.
            </p>
          </div>
          <button
            onClick={() => navigate('/signup')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-[15px] px-7 py-3 rounded-xl border-none cursor-pointer
              hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            See Full Demo
          </button>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-24">
          {[
            { num: '01', title: 'Connect Your Sales', desc: 'Sync your existing POS or use our simplified manual entry to track what\'s leaving your shelves.' },
            { num: '02', title: 'AI Processing', desc: 'Our engine calculates lead times, safety stocks, and demand velocity automatically for every SKU.' },
            { num: '03', title: 'Optimize & Scale', desc: 'Receive automated purchase lists and margin optimization tips every morning before you open.' },
          ].map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-8xl font-black text-indigo-50 absolute -top-4 -left-2 select-none">
                  {step.num}
                </span>
                <h3 className="relative text-lg font-extrabold text-gray-900 mb-4 pt-10">
                  {step.title}
                </h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Big CTA */}
        <div className="bg-gradient-to-br from-indigo-700 to-violet-700 rounded-3xl py-16 md:py-20 px-10 text-center text-white">
          <h2 className="text-4xl md:text-[44px] font-extrabold mb-5 tracking-tight leading-[1.1]">
            Ready to transform<br />your Kirana?
          </h2>
          <p className="text-base mx-auto mb-10 max-w-[640px] text-indigo-200">
            Join 5,000+ local store owners who have reduced inventory waste by 30% using KiranaAI.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-indigo-700 font-extrabold text-[15px] px-8 py-3.5 rounded-xl border-none cursor-pointer
                hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started for Free
            </button>
            <button
              className="bg-violet-800 text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl border border-violet-500 cursor-pointer
                hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule a Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks