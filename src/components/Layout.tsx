import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {
  return (
    <div className='layout'>
      <Outlet />
    </div>
  )
}
export default Layout
