import React from 'react'
import { Helmet } from 'react-helmet-async'
import LoginForm from '../components/LoginForm'
import AuthSidePanel from '../components/AuthSidePanel'

function LoginPage() {
  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-2 relative bg-white dark:bg-gray-950 z-0 lg:h-screen lg:overflow-hidden">
      <Helmet>
        <title>Sign In — KiranaSetu</title>
        <meta name="description" content="Sign in to your KiranaSetu dashboard to manage inventory, track sales, and get AI-powered insights for your kirana store." />
        <link rel="canonical" href="https://kiranasetu.vercel.app/login" />
      </Helmet>
      <AuthSidePanel />

      <div className="z-10 w-full flex flex-col pt-12 pb-16 lg:py-0 lg:pt-[3vh] lg:pb-8 lg:h-screen lg:overflow-hidden">
        <div className="w-full max-w-[420px] lg:max-w-full mx-auto px-4 sm:px-8 lg:px-0 shrink-0">
          <div className="w-full bg-white dark:bg-gray-950 lg:bg-transparent rounded-none overflow-hidden">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage