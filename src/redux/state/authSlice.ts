import { createSlice } from '@reduxjs/toolkit'
import type Auth from '../../models/authModel'

const authInitialState: Auth = {
  authenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState:
    localStorage.getItem('authenticated') !== null &&
    localStorage.getItem('authenticated') === 'true'
      ? { authenticated: true }
      : authInitialState,
  reducers: {
    setAuthenticated: (state, { payload }) => {
      if (payload === false) {
        localStorage.setItem('authenticated', JSON.stringify(false))
      } else if (payload === true) {
        localStorage.setItem('authenticated', JSON.stringify(true))
      }
      state.authenticated = payload
    }
  }
})
export default authSlice.reducer
export const { setAuthenticated } = authSlice.actions
