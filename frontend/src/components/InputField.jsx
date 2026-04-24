import React from 'react'

function InputField({ icon, label, name, type, formik, rightIcon }) {
  const hasError = formik.touched[name] && formik.errors[name]

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>

      <div className="relative">
        {/* Left icon */}
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 flex pointer-events-none ${hasError ? 'text-red-500' : 'text-gray-400'}`}>
          {icon}
        </div>

        <input
          name={name}
          type={type}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={label}
          className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm bg-white outline-none transition-all duration-200
            ${hasError
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
            }`}
        />

        {/* Right icon */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 flex">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error message */}
      {hasError && (
        <p className="text-xs text-red-500 mt-1 ml-1">{formik.errors[name]}</p>
      )}
    </div>
  )
}

export default InputField