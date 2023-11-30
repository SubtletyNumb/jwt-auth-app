import { NavLink } from 'react-router-dom'
import useLoginForm from '../../utilities/useLoginForm'
import Redirect from '../../utilities/Redirect'
const Login = (): JSX.Element => {
  const { handleChange, handleSubmit, errors, isSubmiting, redirect } =
    useLoginForm()
  return (
    <Redirect directions={[
      { condition: redirect, url: '/dashboard' }
    ]}>
      <>
        <div className='layout h-full flex'>
          <div>
            <NavLink to={'/'} replace>Go home</NavLink>
          </div>
          <div className='login-form-container w-80 flex flex-col justify-center m-auto mt-32'>
            <div className='mb-16 text-4xl'>
              Sign in
              <div className='text-sm mt-2'>
                or
                <NavLink
                  to={'/'}
                  className='hover:text-blue-500 cursor-pointer transition-colors duration-300'
                >
                  {' create account'}
                </NavLink>
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className='mb-4 w-full'>
                <div className='text-form-label opacity-75 mb-2'>Username</div>
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='username'
                  autoComplete='false'
                  onChange={(ev) => {
                    handleChange(ev)
                  }}
                  required
                  className={
                    errors.usernameError === ''
                      ? 'border rounded-sm px-2 py-1 text-base w-full h-10 focus:border-blue-400 focus:outline-none'
                      : 'border rounded-sm px-2 py-1 text-base w-full h-10 border-red-400 focus:outline-none'
                  }
                />
                {errors.usernameError !== ''
                  ? (
                  <div className='username-error-helper text-red-500 text-xs mt-1'>
                    {errors.usernameError}
                  </div>
                    )
                  : (
                  <></>
                    )}
              </div>
              <div className='mb-4 w-full'>
                <div className='text-form-label opacity-75 mb-2'>Password</div>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='password'
                  autoComplete='false'
                  required
                  onChange={(ev) => {
                    handleChange(ev)
                  }}
                  className={
                    errors.passwordError === ''
                      ? 'border rounded-sm px-2 py-1 text-base w-full h-10 focus:border-blue-400 focus:outline-none'
                      : 'border rounded-sm px-2 py-1 text-base w-full h-10 border-red-400 focus:outline-none'
                  }
                />
                {errors.passwordError !== ''
                  ? (
                  <div className='username-error-helper text-red-500 text-xs mt-1'>
                    {errors.passwordError}
                  </div>
                    )
                  : (
                  <></>
                    )}
              </div>
              <div className='flex justify-center'>
                {isSubmiting || Object.values(errors).some(e => e.length > 0)
                  ? (
                  <button
                    disabled
                    className='w-full border rounded bg-gray-200 text-gray-500 px-4 py-1 cursor-pointe
         transition-all duration-300'
                  >
                    Sign in
                  </button>
                    )
                  : (
                  <button
                    className='w-full border rounded bg-blue-500 text-white px-4 py-1 cursor-pointer
          hover:bg-blue-700 transition-all duration-300'
                  >
                    Sign in
                  </button>
                    )}
              </div>
              {errors.unathorizedError !== ''
                ? (
                <div className='w-full mt-6'>
                  <div className='text-center text-sm text-red-500'>
                    Username or password incorrect.
                  </div>
                </div>
                  )
                : (
                <></>
                  )}
            </form>
          </div>
        </div>
      </>
    </Redirect>
  )
}
export default Login
