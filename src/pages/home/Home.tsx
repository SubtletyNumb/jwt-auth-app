import PageMainHeader from '../../components/Home/PageMainHeader'
const Home = (): JSX.Element => {
  return (
    <>
      <PageMainHeader />
      <div className='layout mt-14 bg-stone-950'>
        <div className='welcome-section h-screen bg-stone-950'>
          <div className='text-xl text-center text-white'>{'Welcome'}</div>
        </div>
      </div>
    </>
  )
}
export default Home
