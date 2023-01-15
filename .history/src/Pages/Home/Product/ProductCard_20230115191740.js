import React from 'react';

const ProductCard = ({product}) => {

    const {img,name,details} =product
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                h3
                <div className="card-actions my-auto justify-center">
                </div>
            </div>
</div>
    );
};

export default ProductCard;