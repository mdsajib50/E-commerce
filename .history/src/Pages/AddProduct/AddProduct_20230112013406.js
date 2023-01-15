import React from 'react';

const AddProduct = () => {
    const handelProduct = e =>{
        e.preventDefault()
        const form = e.target;
        const product_name = form.value.product_name;
        const category = form.value.category;
        const 
    }
    return (
        <div className='my-10'>
            <h1 className='text-center font-extrabold text-4xl'>Add Product</h1>
           <div className=' text-center w-1/2 mx-auto shadow-2xl bg-slate-200 p-10 mt-5'>
                <form onSubmit={handelProduct}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Product Name</span>
                        </label>
                        <input type="text" name='product_name' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Type here" className="input input-bordered" />
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Purchase Date </span>
                        </label>
                        <input type="text" name='date' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control rounded-xl">
                    <label className="label">
                            <span className="label-text text-xl">Condition </span>
                        </label>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Fair</span> 
                                <input type="radio" value='fair' name="condition" className="radio checked:bg-red-500" checked />
                            </label>
                            </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Good</span> 
                                <input type="radio" value='good' name="condition" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Excellent</span> 
                                <input type="radio" value='excellent' name="condition" className="radio checked:bg-green-500" checked />
                            </label>
                        </div>
                        <div className="form-control mt-6 w-1/2 mx-auto">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                    </form>
           </div>
        </div>
    );
};

export default AddProduct;