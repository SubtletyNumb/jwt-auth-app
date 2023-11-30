import axios from '../../api/axios'
import { useState } from 'react'
import type loginResponse from '../../models/loginResponse'
import type LoginRequest from '../../models/loginRequest'
import type ServerLoginResponse from '../../models/serverLoginResponse.'
import { AUTH_API_ROUTES } from '../../models/consts'
interface returnType {
  loginService: (loginData: LoginRequest) => Promise<void>
  loginResponse: loginResponse
}
const useLoginService = (): returnType => {
  const [loginResponse, setLoginResponse] = useState<loginResponse>({
    JwtToken: '',
    Success: false,
    Loading: false,
    Authenticated: false
  })

  const loginService = async (loginData: LoginRequest): Promise<void> => {
    setLoginResponse({
      ...loginResponse,
      Loading: true
    })
    try {
      const response = await axios.post(
        AUTH_API_ROUTES.LOGIN,
        JSON.stringify(loginData),
        {
          withCredentials: true
        }
      )
      const responseData = await response.data as ServerLoginResponse
      setLoginResponse({
        JwtToken: responseData.jwtToken,
        Success: responseData.result,
        Loading: false,
        Authenticated: true
      })
    } catch (error) {
      setLoginResponse({
        ...loginResponse,
        Loading: false,
        Authenticated: false,
        Success: false
      })
      console.log(error)
    }
  }
  return {
    loginService,
    loginResponse
  }
}
export default useLoginService
