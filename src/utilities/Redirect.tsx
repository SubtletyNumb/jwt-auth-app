import { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
interface direction {
  condition: boolean
  url: string
}
interface Props {
  children: ReactElement | null
  directions: direction[]
  loading?: boolean
}
const Redirect = ({ children, directions, loading }: Props): JSX.Element => {
  const redirection = directions.find((el) => el.condition)
  if (redirection !== null && redirection !== undefined) {
    return (
      <Navigate to={directions[directions.indexOf(redirection)].url} replace />
    )
  } else if (loading !== null && loading === true) {
    return <div></div>
  }
  return children ?? <div>hello</div>
}
export default Redirect
