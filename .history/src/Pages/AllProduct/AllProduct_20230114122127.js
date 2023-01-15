import React, { useState } from 'react';
import ProductCard from './ProductCard';

const AllProduct = () => {
    const [allProduct, setAllProduct] =useState([])

    fetch('http://localhost:5001/all-products')
    .then(res => res.json())
    .then(data =>setAllProduct(data))
    .catch
    return (
        <div>
            <h1>All Products</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    allProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProduct;