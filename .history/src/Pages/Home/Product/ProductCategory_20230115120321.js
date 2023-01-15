import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const ProductCategory = ({products, setProduct}) => {
    useEffect(()=>{
        fetch(`http://localhost:5001/product-category?category=${products?.category}`)
        .then(res => res.json())
        .then(data =)
    },[products.category])
    return (
        <div>
           <div className="card card-compact bg-white shadow-2xl shadow-sky-200 hover:bg-green-200">
            <figure><img src={products.img} alt="Laptop" /></figure>
            <div className="card-body">
            <h2 className="card-title">{products.product_name}</h2>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Short Description: </span>{products.details}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Original Price: </span>{products.price} tk</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Price: </span>{products.resale_price} tk</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Category: </span>{products.category}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Location: </span>{products.location}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Mobile Number: </span>{products.mobile_number}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Purchase Date: </span>{products.purchase_date}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Condition: </span>{products.condition}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Seller: </span>{products.seller_name}</p>
            <p className='text-lg font-semibold'><span className='text-amber-700'>Seller Email: </span>{products.email}</p>
            <div className="card-actions justify-end">
                
                 <label onClick={()=> setProduct(products)} htmlFor="my-modal-6" className="btn btn-secondary">Book Now</label>
            </div>
        </div> 
    </div>
        </div>
    );
};

export default ProductCategory;