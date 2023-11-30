import { NavLink } from 'react-router-dom'
const Dashboard = (): JSX.Element => {
  return (
    <>
      <div>
        <NavLink to={'/'} replace>
          Go home
        </NavLink>
      </div>
    <div>Dashboard</div>
    </>
  )
}
export default Dashboard
