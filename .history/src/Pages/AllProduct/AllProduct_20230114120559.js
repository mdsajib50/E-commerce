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
            <div>
                {
                    allProduct.map(product => <ProductCard key={pro}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProduct;