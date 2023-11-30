import { useState } from 'react'
import axios from '../../api/axios'
import { AUTH_API_ROUTES } from '../../models/consts'

interface RefreshTokenApiResponse {
  jwtToken: string
  success: boolean
  message: string
}
interface returnType {
  loading: boolean
  refreshToken: () => Promise<RefreshTokenApiResponse | undefined>
}
const useRefreshToken = (): returnType => {
  const [loading, setLoading] = useState(true)
  const refreshToken = async (): Promise<
  RefreshTokenApiResponse | undefined
  > => {
    try {
      const response = await axios.post(
        AUTH_API_ROUTES.REFRESH_JWT_TOKEN,
        {},
        {
          withCredentials: true
        }
      )
      const responseData = (await response.data) as RefreshTokenApiResponse
      setLoading(false)
      return responseData
    } catch (error) {
      return await Promise.reject(error)
    }
  }
  return {
    loading,
    refreshToken
  }
}
export default useRefreshToken
