import React from 'react';

const ProductCard = ({product}) => {
    const {_id, img, seller_name, email,product_name, price, resale_price, category, details, location, mobile_number,
        purchase_date, condition} = product
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Laptop" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p className='text-lg font-semibold'><span className='text-teal-500'>Short Description: </span>{details}</p>
                <p className='text-lg font-semibold'><span>Original Price: </span>{price} tk</p>
                <p className='text-lg font-semibold'><span>Price: </span>{resale_price} tk</p>
                <p className='text-lg font-semibold'><span>Category: </span>{category}</p>
                <p className='text-lg font-semibold'>{location}</p>
                <p className='text-lg font-semibold'>Mobile Number: {mobile_number}</p>
                <p className='text-lg font-semibold'>Purchase Date: {purchase_date}</p>
                <p className='text-lg font-semibold'>Condition: {condition}</p>
                <p className='text-lg font-semibold'>Seller: {seller_name}</p>
                <p className='text-lg font-semibold'>Seller Email: {email}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;