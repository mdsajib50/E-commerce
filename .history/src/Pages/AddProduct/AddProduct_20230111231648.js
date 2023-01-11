import React from 'react';

const AddProduct = () => {
    return (
        <div className=''>
           <div className=' text-center w-1/2 mx-auto bg'>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='product_name' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text" name='mobile' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Purchase Date </span>
                        </label>
                        <input type="text" name='date' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control rounded-xl">
                    <label className="label">
                            <span className="label-text">Condition </span>
                        </label>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Fair</span> 
                                <input type="radio" value='fair' name="condition" className="radio checked:bg-red-500" checked />
                            </label>
                            </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Good</span> 
                                <input type="radio" value='good' name="condition" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Excellent</span> 
                                <input type="radio" value='excellent' name="condition" className="radio checked:bg-green-500" checked />
                            </label>
                        </div>
                    </div>
                    </form>
           </div>
        </div>
    );
};

export default AddProduct;