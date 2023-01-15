import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const AllProduct = () => {
    const [allProduct, setAllProduct] =useState([])
    const [product, setProduct] = useState({})
    fetch('http://localhost:5001/all-products')
    .then(res => res.json())
    .then(data =>setAllProduct(data))
    .catch(error => console.error(error))
    return (
        <div>
            <h1>All Products</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allProduct.map(product => <ProductCard key={product._id} product={product} setProduct={setProduct}></ProductCard>)
                }
            </div>
            <ProductModal product={product} all></ProductModal>
        </div>
    );
};

export default AllProduct;