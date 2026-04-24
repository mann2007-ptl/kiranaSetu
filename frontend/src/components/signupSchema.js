import * as Yup from 'yup'

const signupSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number')
    .required('Phone number is required'),
  storeName: Yup.string()
    .min(2, 'Store name must be at least 2 characters')
    .required('Store name is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
})

export default signupSchema