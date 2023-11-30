import { useSelector } from 'react-redux'
import { type AppStore } from '../../redux/store'
const GettingStarted = (): JSX.Element => {
  const { rol } = useSelector((store: AppStore) => store.localUser)
  return (
    <>
    <div className='h-full w-screen'>
    <h2 className='text-xl text-center mt-10'>Thank you for joining us!</h2>
      <div className='flex flex-col items-center w-60 my-0 mx-auto h-96 break-all
      border p-4 mt-10 rounded-md bg-slate-50'>
      <div>{rol}</div>
      <div className='text-sm'>
        <div className='text-center font-semibold'>JWT Key:</div>
      </div>
    </div>
    </div>
    </>
  )
}
export default GettingStarted
