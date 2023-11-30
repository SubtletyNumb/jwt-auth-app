import { NavLink } from 'react-router-dom'
interface props {
  route: string
  text: string
}
const AnchorUnderlineBtn = ({ route, text }: props): JSX.Element => {
  return (
    <NavLink
    to={route}
    className='text-lg relative after:contet-[""] after:w-0 after:h-underline after:absolute after:-bottom-0 after:-left-0
    after:bg-black hover:after:w-full after:transition-all after:duration-100 ml-2'
    >{text}</NavLink>
  )
}
export default AnchorUnderlineBtn
