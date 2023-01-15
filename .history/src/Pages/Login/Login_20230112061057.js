import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-full mt-12">
            
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14 mx-auto">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control border rounded-xl">
                            <label className="label">
                            <span className="label-text text-xl text-">Role </span>
                            </label>
                        <div className="form-control">
                            <label className="label justify-start cursor-pointer">
                                <span className="label-text text-xl">Admin</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='admin' name="role" className="radio checked:bg-red-500" defaultChecked />
                            </label>
                            <label className="label justify-start cursor-pointer">
                                <span className="label-text text-xl">Seller</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='seller' name="role" className="radio checked:bg-blue-500" defaultChecked />
                            </label>
                            <label className="label justify-start cursor-pointer">
                                <span className="label-text text-xl">Buyer</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='buyer' name="role" className="radio checked:bg-green-500" defaultChecked />
                            </label>
                            
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Log in with Google</p>
                    <button className='btn font-bold text-green-400'>Google</button>
                    <p className='text-center'>Create A New Account<Link className='font-bold text-orange-600' to='/signup'>Sign up</Link></p>
                   
                </div>
            </div>
    );
};

export default Login;