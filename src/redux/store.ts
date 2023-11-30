import { configureStore } from '@reduxjs/toolkit'
import localUserSliceReducer from './state/localUserSlice'
import authSliceReducer from './state/authSlice'
import type LocalUser from '../models/localUser'
import type Auth from '../models/authModel'
interface AppStore {
  localUser: LocalUser
  auth: Auth
}
const store = configureStore<AppStore>({
  reducer: {
    localUser: localUserSliceReducer,
    auth: authSliceReducer
  }
})
export default store
export { type AppStore }
