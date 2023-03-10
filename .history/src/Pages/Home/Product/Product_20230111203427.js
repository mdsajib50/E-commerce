import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([])
    fetch('https://e-commerce-server-virid.vercel.app/products')
    .then(res => res.json())
    .then(data =>setProducts(data))
    .catch((error) => {
      console.error(error)
    })
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    
    <div>
      <h1 className="text-5xl font-bold">Product</h1>
      div.
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Product;