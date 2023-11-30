import { type ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { type AppStore } from '../redux/store'
import { Navigate } from 'react-router-dom'
import UseValidateUserJwt from '../services/authServices/ValidateUserJwt'
interface Props {
  children: ReactElement
}
const LoginRedirect = ({ children }: Props): JSX.Element => {
  const { validateUserJwt, loadingValidation } = UseValidateUserJwt()
  const { authenticated } = useSelector((store: AppStore) => store.auth)

  useEffect(() => {
    validateUserJwt()
  }, [])
  if (authenticated && !loadingValidation) {
    return <Navigate to={'/'} replace />
  } else if (!authenticated && !loadingValidation) {
    return children
  } else {
    return <div></div>
  }
}
export default LoginRedirect
