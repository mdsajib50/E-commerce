import React from 'react';

const ProductCard = ({product}) => {
    const {_id, img, seller_name, email,product_name, price, resale_price, category, details, location, mobile_number,
        purchase_date, condition} = product
    return (
        <div className="card card-compact bg-white shadow-2xl shadow-sky-200 hover: bg-">
            <figure><img src={img} alt="Laptop" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Short Description: </span>{details}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Original Price: </span>{price} tk</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Price: </span>{resale_price} tk</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Category: </span>{category}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Location: </span>{location}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Mobile Number: </span>{mobile_number}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Purchase Date: </span>{purchase_date}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Condition: </span>{condition}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Seller: </span>{seller_name}</p>
                <p className='text-lg font-semibold'><span className='text-amber-700'>Seller Email: </span>{email}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;