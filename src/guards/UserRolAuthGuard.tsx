import { useEffect, type ReactElement } from 'react'
import UseValidateUserRol from '../services/authServices/ValidateUserRol'
import { useNavigate, Outlet } from 'react-router-dom'
import { type userRolId } from '../models/localUser'

interface props {
  children?: ReactElement | null
  rolId: userRolId
}
const UserRolAuthGuard = ({ children, rolId }: props): JSX.Element | undefined => {
  const { loading, isAuthorized, validateUserRol } = UseValidateUserRol()
  const navigate = useNavigate()
  useEffect(() => {
    validateUserRol(rolId)
  }, [])
  if (!loading && isAuthorized) {
    return children ?? <Outlet />
  } else if (!loading && !isAuthorized) {
    navigate(-1)
  } else {
    return <div></div>
  }
}
export default UserRolAuthGuard
