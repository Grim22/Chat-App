
import Chat from './Chat';
import Navbar from './Navbar';
import Search from './Search';
import comp from '../assets/comp.jpg'

function Sidebar() {
  return (
    <div className="drawer z-50 lg:h-[93vh] lg:drawer-open flex md:flex-row-reverse justify-end">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center h-[100%]  w-full">
            {/* Page content here */}
            {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            <div className="chat-container h-full grow">
                <Chat/>
            </div>
        </div>
        <div className="drawer-side lg:bg-base-200 h-full">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-0 w-full h-auto lg:full bg-base-200 text-base-content overflow-auto">
                <div className='md:hidden'>
                    <Navbar/>
                </div>
                <Search />
                <div className="contact h-24 max-h-24 flex flex-row items-center p-5">
                    <div className="avatar-container">
                    <img src={comp} className='h-12 w-14 object-cover rounded-full' />
                    </div>
                    <div className="text-container w-full flex flex-col ml-5">
                        <div className="name text-primary text-lg font-semibold w-full flex justify-start">
                            Grim
                        </div>
                        <div className="last-message h-5 w-full flex justify-start ">
                            <p className='text-clip overflow-hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam at corporis voluptate sed nemo, amet a cum voluptatibus voluptatum praesentium officia tempora dolore impedit iste, architecto porro magnam unde.
                            </p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar