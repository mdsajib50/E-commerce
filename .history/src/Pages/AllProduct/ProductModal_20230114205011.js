import React from 'react';

const ProductModal = ({product}) => {
    console.log(product)
    return (
        
        <div>
                

                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <div className=' text-center w-1/2 mx-auto shadow-2xl bg-slate-200 p-10 mt-5'>
                <form onSubmit={handelProduct}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Seller Name</span>
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
                        <input type="text" name='product_name' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Product Image</span>
                        </label>
                        <input type="text" name='product_image' placeholder="Type here" className="input input-bordered" />
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
                            <span className="label-text text-xl">Original Price</span>
                        </label>
                        <input type="text" name='original_price' placeholder="Type here" className="input input-bordered" />
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
                        <div className="form-control mt-6 w-1/2 mx-auto">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                    </form>
           </div>
                    <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ProductModal;