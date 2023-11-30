import { useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
import useRefreshToken from '../services/authServices/RefreshToken'
import { type AxiosError } from 'axios'
const useAxiosPrivate = (): typeof axiosPrivate => {
  const { refreshToken } = useRefreshToken()
  useEffect(() => {
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const prevRequest = error.config
        if (prevRequest === undefined) return await Promise.reject(error)
        if (error.response?.status === 401) {
          await refreshToken()
          return await axiosPrivate(prevRequest)
        }
        console.log('XDDD')
        return await Promise.reject(error)
      }
    )
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [refreshToken])
  return axiosPrivate
}
export default useAxiosPrivate
