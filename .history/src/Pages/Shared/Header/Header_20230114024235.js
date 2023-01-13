import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const[admin, setAdmin] = useState([])
    const handelSignOut = () =>{
        logOut()
        .then()
        .catch(err => {
          console.error(err);
        })
      }

        fetch('http://localhost:5001/users')
        .then(res => res.json())
        .then(data => {
        console.log(data)
        const filterAdmin = data.filter((seller) => seller.role === 'seller');
        setAdmin(filterAdmin)
        })
        .catch(err => console.error(err));
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/home'>Home</Link></li>
                
                <li><Link to='/blog'>Blog</Link></li>
                {
                    admin.length === 0 ?
                    <>
                        <li><Link to='/allsellers'>All Sellers</Link></li>
                        <li><Link to='/allbuyer'>All Buyers</Link></li>
                    </>
                    :
                    <li><Link to='/myorder'>My Order</Link></li>
                }
                
                {
                    user?.email ?

                <>
                    <li><Link to='/add-product'>Add A Product</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><button className='btn btn-accent' onClick={handelSignOut}>Log Out</button></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </>
                }
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Laptop Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/myorder'>My Order</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                {
                    user?.email ?

                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/add-product'>Add A Product</Link></li>
                    <li><button className='btn btn-accent' onClick={handelSignOut}>Log Out</button></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </>
                }
            </ul>
        </div>
        <div className="navbar-end">
    
        </div>
</div>
    );
};

export default Header;