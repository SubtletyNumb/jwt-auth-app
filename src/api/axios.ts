import axios from 'axios'
import { BASE_AUTH_API_URL } from '../models/consts'

export default axios.create({
  baseURL: BASE_AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' }
})
export const axiosPrivate = axios.create({
  baseURL: BASE_AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
