import React from 'react'
import SignupSidePanel from '../components/SignupSidePanel'
import SignupForm from '../components/SignupForm'

function SignupPage() {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed',
      top: 0, left: 0,
    }}>
      <SignupSidePanel />
      <SignupForm />
    </div>
  )
}

export default SignupPage