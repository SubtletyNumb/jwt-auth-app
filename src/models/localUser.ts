export type userRolId = '1' | '2' | '3' | '4'
interface LocalUser {
  rol: userRolId
  username: string
  email: string
}
export default LocalUser
