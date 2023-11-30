import { useEffect, type ReactElement } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UseValidateUserJwt from '../services/authServices/ValidateUserJwt'
import { type AppStore } from '../redux/store'
import { useSelector } from 'react-redux'
interface props {
  children?: ReactElement | null
}
const UserAuthGuard = ({ children }: props): JSX.Element => {
  const { authenticated } = useSelector((store: AppStore) => store.auth)
  const navigate = useNavigate()
  const { validateUserJwt, loadingValidation } = UseValidateUserJwt()
  useEffect(() => {
    validateUserJwt()
  }, [])
  if (!loadingValidation && authenticated) {
    return children ?? <Outlet />
  } else if (!loadingValidation && !authenticated) {
    navigate('/', { state: { authenticated: false }, replace: true })
  }
  return <div></div>
}
export default UserAuthGuard
