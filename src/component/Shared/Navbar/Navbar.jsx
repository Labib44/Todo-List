import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import logo from "../../../assets/main.png";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const menuItem = <>
        <li><Link className='btn m-2 py-3.5 bg-gray-200 rounded-md border-none' to='/'>Home</Link></li>
        <li><Link className='btn m-2 py-3.5 bg-gray-200 rounded-md border-none' to='/tasks'>Task</Link></li>
        <li><Link className='btn m-2 py-3.5 bg-gray-200 rounded-md border-none' to='/about'>About</Link></li>
        <li><Link className='btn m-2 py-3.5 bg-gray-200 rounded-md border-none' to='/blog'>Blog</Link></li>
        <li><Link className='btn m-2 py-3.5 bg-gray-200 rounded-md border-none' to='/contact'>Contact</Link></li>

    </>
    return (
        <div className='bg-gray-200 text-gray-700'>
        <div className="navbar flex justify-between container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white z-20">
                        {menuItem}
                    </ul>
                </div>
                <div className=''>

                    <Link to={'/'}>
                        <img src={logo} className='h-12' alt="" />
                    </Link>
                </div>

                <div className="hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menuItem}
                    </ul>
                </div>
            </div>


            <div className="navbar-end">
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {user?.uid ?
                    <button onClick={handleLogOut} className="btn btn-outline rounded-md">Log Out</button>
                    :
                    <></>
                }
                
            </div>
        </div>

    </div>
    );
};

export default Navbar;