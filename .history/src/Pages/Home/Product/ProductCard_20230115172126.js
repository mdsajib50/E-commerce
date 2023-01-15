import React from 'react';

const ProductCard = ({product}) => {
    // console.log(product)
    const productFilter = product.advertise
    console.log(message)
    const {img,name} =productFilter
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
                <div className="card-actions my-auto justify-center">
                <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
</div>
    );
};

export default ProductCard;