import React from 'react';

const ProductCard = ({product}) => {
    console.log(product)
    const {img,name} =product
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
                <div className="card-actions items-center justify-center">
                <button className="btn btn-primary ">Buy Now</button>
                </div>
            </div>
</div>
    );
};

export default ProductCard;