import React from 'react'

function InputField({ icon, label, name, type, formik, rightIcon }) {
  const hasError = formik.touched[name] && formik.errors[name]

  return (
    <div style={{ marginBottom: 18 }}>

      {/* Label */}
      <label style={{
        display: 'block', fontSize: 13,
        fontWeight: 600, color: '#374151', marginBottom: 6
      }}>
        {label}
      </label>

      <div style={{ position: 'relative' }}>

        {/* Left icon */}
        <div style={{
          position: 'absolute', left: 14, top: '50%',
          transform: 'translateY(-50%)',
          color: hasError ? '#EF4444' : '#9CA3AF',
          display: 'flex', pointerEvents: 'none'
        }}>
          {icon}
        </div>

        <input
          name={name}
          type={type}
          value={formik.values[name]}
          onChange={formik.handleChange}
          placeholder={label}
          style={{
            width: '100%', padding: '12px 44px',
            border: `1.5px solid ${hasError ? '#EF4444' : '#E5E7EB'}`,
            borderRadius: 10, fontSize: 14,
            color: '#0F172A', outline: 'none',
            background: hasError ? '#FEF2F2' : '#F9FAFB',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderColor = '#4338CA'}
          onBlur={e => {
            formik.handleBlur(e)
            e.target.style.borderColor = hasError ? '#EF4444' : '#E5E7EB'
          }}
        />

        {/* Right icon */}
        {rightIcon && (
          <div style={{
            position: 'absolute', right: 14, top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer', color: '#9CA3AF', display: 'flex'
          }}>
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error message */}
      {hasError && (
        <p style={{ color: '#EF4444', fontSize: 12, marginTop: 4, marginLeft: 2 }}>
          {formik.errors[name]}
        </p>
      )}
    </div>
  )
}

export default InputField