import { type JwtPayload } from 'jwt-decode'

interface tokenPayload extends JwtPayload {
  role: '1' | '2' | '3' | '4'
  unique_name: string
}
export default tokenPayload
