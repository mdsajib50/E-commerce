import React from 'react';

const Login = () => {
    return (
        <div className="hero w-full mt-12">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14">
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
                        <div className="form-control rounded-xl">
                    <label className="label">
                            <span className="label-text text-xl">RO </span>
                        </label>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Fair</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='fair' name="condition" className="radio checked:bg-red-500" defaultChecked />
                            </label>
                            </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Good</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='good' name="condition" className="radio checked:bg-blue-500" defaultChecked />
                            </label>
                        </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Excellent</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='excellent' name="condition" className="radio checked:bg-green-500" defaultChecked />
                            </label>
                        </div>
                    </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Log in with Google</p>
                    <button onClick={handelGoogleLogin} className='btn font-bold text-green-400'>Google</button>
                    <p className='text-center'>Create A New Account<Link className='font-bold text-orange-600' to='/signup'>Sign up</Link></p>
                    
                </div>
            </div>

        </div>
    );
};

export default Login;