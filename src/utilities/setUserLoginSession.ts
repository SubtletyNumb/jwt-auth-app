import type LocalUser from '../models/localUser'

interface Props {
  userLoginDetails?: LocalUser
  authenticated?: boolean
}
const setUserLoginSession = ({ userLoginDetails, authenticated }: Props): void => {
  localStorage.setItem('authenticated', JSON.stringify(authenticated))
  localStorage.setItem('user_login_details', JSON.stringify(userLoginDetails))
}
export default setUserLoginSession
