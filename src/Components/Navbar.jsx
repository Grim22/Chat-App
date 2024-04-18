import ThemeChanger from './ThemeChanger';

function Navbar() {
  return (
    <div className="navbar bg-base-300">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">Chat App</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li className='flex items-center justify-center px-2'>
                    <ThemeChanger />
                </li>
                <li className='flex items-center justify-center px-1 font-semibold '>
                    Log out
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