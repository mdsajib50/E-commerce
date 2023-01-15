import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const notify = () => toast('Your Booking successful');
const ProductModal = ({product, products}) => {
    const {user} = useContext(AuthContext)
   
    const handelBooking = (e) =>{
        e.preventDefault()
        const form = e.target
        const  name = form.name.value;
        const email = form.email.value;
        const product_name = form.product_name.value;
        const price = form.price.value;
        const location = form.location.value;
        const mobile = form.mobile.value;

        const booking ={
            name,
            email,
            product_name,
            price,
            location,
            mobile
        }
        fetch('http://localhost:5001/booking',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            notify()
            form.reset()
            console.log(data)
        })
        .catch(err => console.error(err))
    }
    const handelUpdate = _id =>{
        fetch(`http://localhost:5001/product/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify({status: 'Sold'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = products.filter(product => product._id !== _id);
                    const sold = products.find(product => product._id === _id);
                    sold.status = 'sold'
                    const newProducts = [sold,...remaining]
                    setProducts(newProducts)
                    alert(Booking Su')
                }
    
            })
            .catch(err =>console.error(err))
    }
    return (
        
        <div>

                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='font-semibold text-xl'>{product?.name}</h1>
                <div className=' text-center mx-auto shadow-2xl bg-slate-200 p-10 mt-5'>
                <form onSubmit={handelBooking}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" defaultValue={user?.displayName || null} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" defaultValue={user?.email || null} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Product Name</span>
                        </label>
                        <input type="text" name='product_name' placeholder="Type here" defaultValue={product?.name} className="input input-bordered" readOnly/>
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Type here" defaultValue={product?.price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Mobile Number</span>
                        </label>
                        <input type="text" name='mobile' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={()=> handelUpdate(products._id)} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
                    <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
                </div>
                <Toaster/>
        </div>
    );
};

export default ProductModal;