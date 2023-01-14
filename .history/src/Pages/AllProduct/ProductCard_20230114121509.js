import React from 'react';

const ProductCard = ({product}) => {
    const {_id, img, seller_name, email,product_name, price, resale_price, category, details, location, mobile_number,
        purchase_date, condition} = product
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{details}</p>
                <p>{</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;