import type LocalUser from '../models/localUser'

const getUserLogingDetails = (): LocalUser | null => {
  return JSON.parse(localStorage.getItem('user_loging_details') as string)
}
export default getUserLogingDetails
