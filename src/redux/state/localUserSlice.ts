import { createSlice } from '@reduxjs/toolkit'
import type LocalUser from '../../models/localUser'
import getUserLogingDetails from '../../utilities/getUserLogingDetails'
import setUserLoginSession from '../../utilities/setUserLoginSession'

const EmptyLocalUser: LocalUser = {
  rol: '4',
  username: '',
  email: ''
}

const localUserSlice = createSlice({
  name: 'localUser',
  initialState:
    getUserLogingDetails() ?? EmptyLocalUser,
  reducers: {
    clearUserDetails: (state) => {
      localStorage.removeItem('user_login_details')
      state.email = ''
      state.rol = '4'
      state.username = ''
    },
    setUserDetails: (state, { payload }) => {
      setUserLoginSession({
        userLoginDetails: {
          email: payload.email,
          username: payload.username,
          rol: payload.rol
        },
        authenticated: payload.authenticated
      })
      state.email = payload.email
      state.rol = payload.rol
      state.username = payload.username
    }
  }
})

export default localUserSlice.reducer
export const { clearUserDetails, setUserDetails } = localUserSlice.actions
