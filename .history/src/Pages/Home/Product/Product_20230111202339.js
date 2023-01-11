import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([])
    fetch('http://localhost:5001/products')
    .then(res => res.json())
    .then(data =>setProducts(data))
    .catch((value) => {
      ce
    })
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    
    <div>
      <h1 className="text-5xl font-bold">Product</h1>
      
     { products.map(product =>{<ProductCard key={product._id} product={product}></ProductCard>})}
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Product;