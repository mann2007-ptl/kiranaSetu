import React from 'react'
import SignupForm from '../components/SignupForm'
import SignupSidePanel from '../components/SignupSidePanel'

function SignupPage() {
  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-2 relative bg-white dark:bg-gray-950 z-0 lg:h-screen lg:overflow-hidden">
      <SignupSidePanel />

      <div className="z-10 w-full flex flex-col pt-12 pb-24 lg:py-0 lg:pt-[4vh] lg:pb-16 lg:h-screen lg:overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-[420px] lg:max-w-full mx-auto px-4 sm:px-8 lg:px-0 shrink-0">
          <div className="w-full bg-white dark:bg-gray-950 lg:bg-transparent rounded-none overflow-hidden">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage