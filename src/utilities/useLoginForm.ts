import type React from 'react'
import { useEffect, useState } from 'react'
import validateLoginForm from './validateLoginForm'
import useLoginService from '../services/authServices/loginService'
interface UseLoginFormReturnType {
  handleChange: (ev: React.FormEvent<HTMLInputElement>) => void
  handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void
  errors: {
    usernameError: string
    passwordError: string
    unathorizedError: string
  }
  isSubmiting: boolean
  redirect: boolean
}
const useLoginForm = (): UseLoginFormReturnType => {
  const [loginFormValues, setLoginFormValues] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: '',
    unathorizedError: ''
  })
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { loginResponse, loginService } = useLoginService()
  useEffect(() => {
    if (
      errors.passwordError === '' &&
      errors.usernameError === '' &&
      isSubmiting
    ) {
      console.log('go ahead!')
      loginService(loginFormValues)
    } else if (
      (errors.passwordError.length > 0 || errors.usernameError.length > 0) &&
      isSubmiting
    ) {
      setIsSubmiting(false)
    }
  }, [errors])
  useEffect(() => {
    if (!loginResponse.Loading && loginResponse.Success) {
      setIsSubmiting(false)
    }
    if (
      !loginResponse.Success &&
      !loginResponse.Loading &&
      !loginResponse.Authenticated && isSubmiting
    ) {
      console.log('unathorized')
      setErrors((values) => {
        return {
          ...values,
          unathorizedError: 'Username or password incorrect'
        }
      })
      setIsSubmiting(false)
    }
  }, [loginResponse])

  const handleChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    const target = ev.currentTarget
    setLoginFormValues({
      ...loginFormValues,
      [target.id]: target.value
    })
    setErrors({ passwordError: '', usernameError: '', unathorizedError: '' })
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault()
    setErrors(validateLoginForm(loginFormValues))
    setIsSubmiting(true)
  }
  return {
    handleChange,
    handleSubmit,
    errors,
    isSubmiting,
    redirect: loginResponse.Success
  }
}
export default useLoginForm
