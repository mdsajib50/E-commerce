import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user} = useContext
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/myorder'>My Order</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/add-product'>Add A Product</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Laptop Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/myorder'>My Order</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/add-product'>Add Product</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Get started</a>
        </div>
</div>
    );
};

export default Header;