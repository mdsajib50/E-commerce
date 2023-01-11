import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <form >
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='product_name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name='description' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Mobile Number</span>
                </label>
                <input type="text" name='mobile' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Purchaes </span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            </form>
        </div>
    );
};

export default AddProduct;