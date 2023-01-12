import React from 'react';

const AddProduct = () => {
    const handelProduct = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const product_name = form.product_name.value;
        const product_image =form.product_image.value;
        const category = form.category.value;
        const price = form.price.value;
        const original_price = form.original_price.value;
        const description = form.description.value;
        const location = form.location.value;
        const mobile_number = form.mobile.value;
        const purchase_date = form.date.value;
        const condition = form.condition.value;

        const product={
                seller_name : name,
                email,
                product_name,
                img: product_image,
                category,
                price: original_price,
                resale_price: price,
                details : description,
                location,
                mobile_number,
                purchase_date,
                condition
        }

        fetch('http://localhost:5001/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            alert('Product successfully added')
            console.log(data)})
        .catch(err => console.error(err))

    }
    
    return (
        <div className='my-10'>
            <h1 className='text-center font-extrabold text-4xl'>Add Product</h1>
           <div className=' text-center w-1/2 mx-auto shadow-2xl bg-slate-200 p-10 mt-5'>
                <form onSubmit={handelProduct}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Seller Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered" />
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
                                <input onChange={handelOnChange} type="radio" value='fair' name="condition" className="radio checked:bg-red-500" checked />
                            </label>
                            </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Good</span> 
                                <input onChange={handelOnChange} type="radio" value='good' name="condition" className="radio checked:bg-blue-500" checked />
                            </label>
                        </div>
                            <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-xl">Excellent</span> 
                                <input onChange={handelOnChange} type="radio" value='excellent' name="condition" className="radio checked:bg-green-500" checked />
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