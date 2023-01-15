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
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='text-center'>
      <h1 className='text-2xl font-extrabold'>Category</h1>
     
          {products.map(product => {
          return <ul>
            <li className><a className="link link-hover bg-emerald-300 p-3">{product.category}</a></li>
          </ul>
          })}
      </div>
    <div>
      <h1 className="text-5xl font-bold">Product</h1>
      <div className='grid gap-4 md:gird-cols-2 lg:grid-cols-3 my-8'>
        { products.map(product =><ProductCard key={product._id} product={product}></ProductCard>)}
      </div>

      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Product;