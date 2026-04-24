import React, { useState } from 'react'
import { useFormik } from 'formik'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputField from './InputField'
import signupSchema from './signupSchema.js'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function SignupForm() {
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      storeName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log('Signup submitted:', values)
      // add your API call here
    },
  })

  return (
    <div style={{
      width: '55%', height: '100%',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'white',
      padding: '0 24px', overflowY: 'auto',
    }}>
      <div style={{ width: '100%', maxWidth: 420, padding: '32px 0' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <StorefrontIcon style={{ color: '#4338CA', fontSize: 24 }} />
          <span style={{ fontWeight: 800, fontSize: 17, color: '#0F172A' }}>
            Kirana<span style={{ color: '#4338CA' }}>Setu</span>
          </span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
          Create your account
        </h1>
        <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 24 }}>
          Start managing your store smarter with AI
        </p>

        <form onSubmit={formik.handleSubmit} noValidate>

          {/* Full Name */}
          <InputField
            icon={<PersonIcon style={{ fontSize: 17 }} />}
            label="Full Name"
            name="fullName"
            type="text"
            formik={formik}
          />

          {/* Email */}
          <InputField
            icon={<EmailIcon style={{ fontSize: 17 }} />}
            label="Email Address"
            name="email"
            type="email"
            formik={formik}
          />

          {/* Phone */}
          <InputField
            icon={<PhoneIcon style={{ fontSize: 17 }} />}
            label="Phone Number"
            name="phone"
            type="tel"
            formik={formik}
          />

          {/* Store Name */}
          <InputField
            icon={<StorefrontIcon style={{ fontSize: 17 }} />}
            label="Store Name"
            name="storeName"
            type="text"
            formik={formik}
          />

          {/* Password */}
          <InputField
            icon={<LockIcon style={{ fontSize: 17 }} />}
            label="Password"
            name="password"
            type={showPass ? 'text' : 'password'}
            formik={formik}
            rightIcon={
              <span onClick={() => setShowPass(!showPass)}>
                {showPass
                  ? <VisibilityOffIcon style={{ fontSize: 17 }} />
                  : <VisibilityIcon style={{ fontSize: 17 }} />}
              </span>
            }
          />

          {/* Confirm Password */}
          <InputField
            icon={<LockIcon style={{ fontSize: 17 }} />}
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            formik={formik}
            rightIcon={
              <span onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm
                  ? <VisibilityOffIcon style={{ fontSize: 17 }} />
                  : <VisibilityIcon style={{ fontSize: 17 }} />}
              </span>
            }
          />

          {/* Sign Up button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            style={{
              width: '100%', padding: '13px',
              background: 'linear-gradient(135deg, #4338CA, #6366F1)',
              color: 'white', border: 'none', borderRadius: 10,
              fontSize: 15, fontWeight: 700, cursor: 'pointer',
              opacity: formik.isSubmitting ? 0.75 : 1,
              marginBottom: 16,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {formik.isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
            <span style={{ fontSize: 12, color: '#9CA3AF', whiteSpace: 'nowrap' }}>
              or continue with
            </span>
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
          </div>

          {/* Google button */}
          <button
            type="button"
            style={{
              width: '100%', padding: '12px', background: 'white',
              border: '1.5px solid #E5E7EB', borderRadius: 10,
              fontSize: 14, fontWeight: 600, color: '#374151',
              cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              gap: 10, marginBottom: 20,
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#4338CA'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Login link */}
          <p style={{ textAlign: 'center', fontSize: 14, color: '#6B7280' }}>
            Already have an account?{' '}
            <a href="/login" style={{
              color: '#4338CA', fontWeight: 700, textDecoration: 'none'
            }}>
              Sign In
            </a>
          </p>

        </form>
      </div>
    </div>
  )
}

export default SignupForm