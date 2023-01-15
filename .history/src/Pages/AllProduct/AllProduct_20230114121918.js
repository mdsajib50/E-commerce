import React from 'react';
import ProductCard from './ProductCard';

const AllProduct = () => {
    const [allProduct, setAllProduct] =useState([])
    fetch('http://localhost:5001/all-products')
    .then(res => res.json())
    .then(data =>setAllProduct(data))
    return (
        <div>
            <h1>All Products</h1>
            <div className='gri'>
                {
                    allProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProduct;