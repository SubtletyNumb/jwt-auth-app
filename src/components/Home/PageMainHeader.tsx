import { useSelector } from 'react-redux'
import AnchorUnderlineBtn from '../AnchorUnderlineBtn'
import { type AppStore } from '../../redux/store'
import useLogoutUser from '../../services/authServices/logoutUser'
import UseValidateUserJwt from '../../services/authServices/ValidateUserJwt'
import { useEffect } from 'react'
const PageMainHeader = (): JSX.Element => {
  const { authenticated } = useSelector((store: AppStore) => store.auth)
  const { loading, logoutUser } = useLogoutUser()
  const { validateUserJwt } = UseValidateUserJwt()
  useEffect(() => {
    validateUserJwt()
  }, [])
  return (
    <>
      <header
        className='bg-white text-black text-center absolute
       top-0 left-0 right-0 h-14 flex flex-row justify-between items-center border-b'
      >
        <div className='ml-2 text-xl'>Home</div>
        <nav className='mr-4 flex justify-between'>
          {authenticated
            ? (
                loading
                  ? (
              <button disabled className='text-gray-400'>
                Logout
              </button>
                    )
                  : (
              <button
                onClick={() => {
                  logoutUser()
                }}
              >
                Logout
              </button>
                    )
              )
            : (
            <AnchorUnderlineBtn route='/login' text='Sign in' />
              )}
          {authenticated
            ? (
            <AnchorUnderlineBtn route='/dashboard' text='Dashboard' />
              )
            : (
            <AnchorUnderlineBtn route='/' text='Dashboard' />
              )}
        </nav>
      </header>
    </>
  )
}
export default PageMainHeader
