import React from 'react';
import { useLoaderData } from 'react-router';

const ProductCategory = ({setProduct}) => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            {products.map(product =>{
                return (<div className="card card-compact bg-white shadow-2xl shadow-sky-200 hover:bg-green-200">
            <figure><img src={product.img} alt="Laptop" /></figure>
            <div className="card-body">
            <h2 className="card-title">{product.product_name}</h2>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Short Description: </span>{product.details}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Original Price: </span>{product.price} tk</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Price: </span>{product.resale_price} tk</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Category: </span>{product.category}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Location: </span>{product.location}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Mobile Number: </span>{product.mobile_number}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Purchase Date: </span>{product.purchase_date}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Condition: </span>{condition}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Seller: </span>{seller_name}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Seller Email: </span>{email}</p>
            <div className="card-actions justify-end">
                
                 <label onClick={()=> setProduct(product)} htmlFor="my-modal-6" className="btn btn-secondary">Book Now</label>
            </div>
        </div> 
    </div>
                )
            })}
        </div>
    );
};

export default ProductCategory;