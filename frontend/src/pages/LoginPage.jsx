import React from 'react'
import AuthSidePanel from '../components/AuthSidePanel'
import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed',
      top: 0, left: 0,
    }}>
      <AuthSidePanel />
      <LoginForm />
    </div>
  )
}

export default LoginPage