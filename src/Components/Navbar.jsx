import { signOut } from 'firebase/auth';
import ThemeChanger from './ThemeChanger';
import { auth } from '../Firebase';

function Navbar() {
  return (
    <div className="navbar bg-base-300">
        <div className="flex-1">
            <a className="text-xl font-bold px-3 italic">CONVO</a>
        </div>
        <li className='flex items-center justify-center px-2'>
            <ThemeChanger />
        </li>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li onClick={()=>signOut(auth)} className='flex items-center justify-center px-1 font-semibold cursor-pointer'>
                    Log out
                </li>
                <li className='flex items-center justify-center px-2'>
                    <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm px-1 drawer-button lg:hidden font-bold"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="close-icon"
                        ><line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </label>
                </li>
                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar