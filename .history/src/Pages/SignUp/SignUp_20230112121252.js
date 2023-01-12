import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handelSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name =form.name.value;
        const email = form.email.value;
        const password = form.password.value
        createUser(email, password)
        .then((result) => {
            const user = result.user
           navigate('/home')
        })
        .catch((err) => {
            console.error(err)
        })
    }
    return (
        <div className="w-full mt-12">
           
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14 mx-auto">
                    <form o className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'> Already have an account? <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
    );
};

export default SignUp;