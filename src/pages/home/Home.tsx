import PageMainHeader from '../../components/Home/PageMainHeader'
const Home = (): JSX.Element => {
  return (
    <>
      <PageMainHeader />
      <div className='layout mt-20'>
        <div className='welcome-section h-screen'>
          <div className='text-xl text-center'>{'Welcome'}</div>
        </div>
      </div>
    </>
  )
}
export default Home
