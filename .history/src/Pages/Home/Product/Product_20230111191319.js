import React, { useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([])
    fetch('http://localhost:5001/products')
    .then(res => res.json())
    .then(data =>setProducts(data))
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Product</h1>
      
      product
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Product;