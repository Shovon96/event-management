import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/features'>Features</NavLink></li>
        <li><NavLink to='/servises'>Services</NavLink></li>
        <li><NavLink to='/project'>Our Project</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <p className="text-4xl font-extrabold">Cri<span className="text-fuchsia-600">A</span>tive</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 font-bold text-base">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button>
                    <NavLink to='/login' className='bg-fuchsia-600 text-white font-bold px-6 py-3 rounded-md'>Login</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;