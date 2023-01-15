import React from 'react';

const ProductCard = ({product}) => {
    const {_id, img, seller_name, email,product_name, price, resale_price, category, details, location, mobile_number,
        purchase_date, condition} = product
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Laptop" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>Short Description: {details}</p>
                <p>Original Price: {price} tk</p>
                <p>Price: {resale_price} tk</p>
                <p>C{category}</p>
                <p>{location}</p>
                <p>{mobile_number}</p>
                <p>{purchase_date}</p>
                <p>{condition}</p>
                <p>{seller_name}</p>
                <p>{email}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;