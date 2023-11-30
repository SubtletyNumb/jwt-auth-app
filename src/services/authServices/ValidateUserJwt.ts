import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../../redux/state/authSlice'
import { clearUserDetails, setUserDetails } from '../../redux/state/localUserSlice'
import { jwtDecode } from 'jwt-decode'
import type tokenPayload from '../../models/tokenPayload'
import { AUTH_API_ROUTES } from '../../models/consts'
import useAxiosPrivate from '../../utilities/useAxiosPrivate'
interface ReturnType {
  validateUserJwt: () => Promise<void>
  loadingValidation: boolean
}
interface ValidateUserJwtResponse {
  success: boolean
  message: string
  userJwtToken: string
}
const UseValidateUserJwt = (): ReturnType => {
  const [loadingValidation, setLoadingValidation] = useState(true)
  const axiosPrivate = useAxiosPrivate()
  const dispatch = useDispatch()
  const validateUserJwt = async (): Promise<void> => {
    try {
      setLoadingValidation(true)
      const response = await axiosPrivate.post(
        AUTH_API_ROUTES.VALIDATE_USER_JWT
      )
      console.log(response)
      const responseData = await response.data as ValidateUserJwtResponse
      const jwtTokenDetails: tokenPayload = jwtDecode(responseData.userJwtToken)
      dispatch(
        setUserDetails({
          username: jwtTokenDetails.unique_name,
          rol: jwtTokenDetails.role,
          email: 'adwdqdqqq',
          authenticated: true
        })
      )
      setLoadingValidation(false)
      dispatch(setAuthenticated(true))
    } catch (error) {
      console.log(error)
      dispatch(setAuthenticated(false))
      dispatch(clearUserDetails())
      setLoadingValidation(false)
    }
  }
  return {
    validateUserJwt,
    loadingValidation
  }
}

export default UseValidateUserJwt
