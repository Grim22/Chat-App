


import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function Home() {

  return (
    <div className='app'>
        <div className='nav hidden fixed top-0 left-0 lg:block w-full'>
            <Navbar />
        </div>
        <div className='flex h-[100vh] lg:pt-[55px] xl:pt-[67px]'>
            <Sidebar />
        </div>
    </div>
  )
}

export default Home