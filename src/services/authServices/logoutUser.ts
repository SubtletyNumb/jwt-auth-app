import { useState } from 'react'
import axios from '../../api/axios'
import { AUTH_API_ROUTES } from '../../models/consts'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../../redux/state/authSlice'
import { clearUserDetails } from '../../redux/state/localUserSlice'

interface ReturnType {
  loading: boolean
  logoutUser: () => Promise<void>
}
const useLogoutUser = (): ReturnType => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const logoutUser = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.post(
        AUTH_API_ROUTES.LOGOUT_USER,
        {},
        { withCredentials: true }
      )
      console.log('logout! ' + response.status)
      setLoading(false)
      dispatch(setAuthenticated(false))
      dispatch(clearUserDetails())
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return {
    loading,
    logoutUser
  }
}
export default useLogoutUser
