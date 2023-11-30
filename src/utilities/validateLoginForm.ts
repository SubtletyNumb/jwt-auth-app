interface returnType {
  usernameError: string
  passwordError: string
  unathorizedError: string
}
interface props {
  username: string
  password: string
}
const validateLoginForm = (values: props): returnType => {
  const result: returnType = {
    passwordError: '',
    usernameError: '',
    unathorizedError: ''
  }
  if (values.password.length < 6) {
    result.passwordError = 'Password may have at least 6 characters.'
  }
  if (values.password.length > 24) {
    result.passwordError = 'Password cannot exceed 24 characters.'
  }
  if (values.username === '') {
    result.usernameError = 'Enter a valid username'
  }
  if (values.username.length > 50) {
    result.usernameError = 'Username cannot exceed 50 characters.'
  }
  return result
}
export default validateLoginForm
