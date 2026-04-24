import React from 'react'
import SignupForm from '../components/SignupForm'
import SignupSidePanel from '../components/SignupSidePanel'

function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 relative lg:bg-white z-0">
      {/* Mobile background image - Fixed so it doesn't move when scrolling */}
      <div className="fixed inset-0 lg:hidden -z-10">
        <img
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=900&q=90"
          alt="Mobile Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-lg" />
      </div>

      <SignupSidePanel />

      <div className="z-10 flex-1 flex flex-col p-4 py-8 sm:p-8 lg:p-0 min-h-screen w-full lg:overflow-y-auto">
        <div className="m-auto w-full max-w-md lg:max-w-none bg-white/90 backdrop-blur-3xl lg:bg-transparent lg:backdrop-blur-none rounded-[32px] lg:rounded-none shadow-[0_8px_40px_rgba(0,0,0,0.15)] lg:shadow-none border border-white/30 lg:border-none overflow-hidden h-fit">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default SignupPage