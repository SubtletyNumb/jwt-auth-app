import { Routes, Route } from 'react-router-dom'
import { Dashboard, GettingStarted, Login, Home } from './pages'
import UserAuthGuard from './guards/UserAuthGuard'
import LoginRedirect from './guards/LoginRedirect'
import UserRolAuthGuard from './guards/UserRolAuthGuard'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/home'} element={<Home />} />
      <Route
        path={'/Login'}
        element={
          <LoginRedirect>
            <Login />
          </LoginRedirect>
        }
      />
      <Route
        path={'Dashboard'}
        element={
          <UserAuthGuard>
            <Dashboard />
          </UserAuthGuard>
        }
      />
      <Route
        path={'GettingStarted'}
        element={
          <UserRolAuthGuard rolId='1'>
            <GettingStarted />
          </UserRolAuthGuard>
        }
      />
      <Route path={'/*'} element={<>Not found</>} />
    </Routes>
  )
}

export default App
