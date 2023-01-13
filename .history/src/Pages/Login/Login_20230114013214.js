import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Login successfully');
const Login = () => {
    const {login, user, auth} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
   
    const navigate = useNavigate();
    let 

    const jwtToken= (currentUser) =>{
       
        //get jwt token
        fetch('http://localhost:5001/jwt',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
            localStorage.setItem('token',data.token)
            
        })
    }
    const handelLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const name = user?.displayName || null;
        login(email, password)
        .then((result) => {
            const user =result.user
            const currentUser = {
                email: user.email
            }
            jwtToken(currentUser)
            notify()
            saveUser(name, email, role)
            form.reset()
            console.log(user)
        })
        .catch((error) => {
            console.log(error);
        })
     }
     const saveUser=(name, email, role)=>{
            const user ={name, email, role}
            fetch('http://localhost:5001/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                navigate('/')
                })
            .catch(err => console.error(err))
     }
     const handelGoogleLogin =()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            jwtToken(currentUser)
            notify()
            saveUser(user?.displayName, email, role)
           console.log(user)

            navigate('/');
           })
        .catch((e) => {
            console.error(e)
        })
   } 
    return (
        <div className="w-full mt-12">
            
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14 mx-auto">
                    <form onSubmit={handelLogin} className="card-body">
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control border rounded-xl">
                            <label className="label">
                            <span className="label-text text-2xl">Role </span>
                            </label>
                        <div className="form-control">
                            <label className="label justify-around cursor-pointer">
                                <span className="label-text text-xl">Admin</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='admin' name="role" className="radio checked:bg-red-500" defaultChecked />
                            </label>
                            <label className="label justify-around cursor-pointer">
                                <span className="label-text text-xl">Seller</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='seller' name="role" className="radio checked:bg-blue-500" defaultChecked />
                            </label>
                            <label className="label justify-around cursor-pointer">
                                <span className="label-text text-xl">Buyer</span> 
                                <input onChange={(e) => e.target.value} type="radio" value='buyer' name="role" className="radio checked:bg-green-500" defaultChecked />
                            </label>
                            
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary w-40 mx-auto">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Log in with Google</p>
                    <button onClick={handelGoogleLogin} className='btn font-bold text-green-400 w-32 mx-auto my-6'>Google</button>
                    <p className='text-center'>Create A New Account<Link className='font-bold text-orange-600' to='/signup'>Sign up</Link></p>
                   
                </div>
                <Toaster/>
            </div>
    );
};

export default Login;