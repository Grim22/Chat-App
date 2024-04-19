
import Chat from './Chat';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

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
                <div className='lg:hidden'>
                    <Navbar/>
                </div>
                <Search />
                <Chats />
            </ul>
        </div>
    </div>
  )
}

export default Sidebar