import { type AxiosError } from 'axios'
import { useState } from 'react'
import type UserValidateRolResponse from '../../models/userValidateRolResponse'
import { AUTH_API_ROUTES } from '../../models/consts'
import { type userRolId } from '../../models/localUser'
import axios from '../../api/axios'

interface ReturnType {
  loading: boolean
  isAuthorized: boolean
  validateUserRol: (validRolId: userRolId) => Promise<void>
}
const UseValidateUserRol = (): ReturnType => {
  const [loading, setLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const validateUserRol = async (
    validRolId: userRolId
  ): Promise<void> => {
    try {
      const response = await axios.post(
        AUTH_API_ROUTES.VALIDATE_USER_ROL + `?validRolId=${validRolId}`,
        {},
        { withCredentials: true }
      )
      const responseData = response.data as UserValidateRolResponse
      console.log(responseData)
      setLoading(false)
      setIsAuthorized(true)
    } catch (error) {
      const axiosError = error as AxiosError
      console.log(axiosError)
      setLoading(false)
      setIsAuthorized(false)
    }
  }
  return {
    loading,
    validateUserRol,
    isAuthorized
  }
}
export default UseValidateUserRol
