import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const navlink = <>
        <li className='text-xl'><NavLink to='/'>Home</NavLink></li>
        <li className='text-xl'><NavLink to='/practical'>Practical</NavLink></li>
        <li className='text-xl'><NavLink to='login'>Login</NavLink></li>
        <li className='text-xl'><NavLink to='register'>Register</NavLink></li>
    </>
    return (
        <>
            <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-red-600 text-4xl">MR.Tommy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div tabIndex={0} role="button" className=" ml-80 btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        </div>
        
        </>
        
    );
};

export default Header;