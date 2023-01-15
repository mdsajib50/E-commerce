import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../../AllProduct/ProductModal';
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';

const Product = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const category = products.map(product => product.category)
    const categories = [...new Set(category)]
    fetch('https://e-commerce-server-mdsajib50.vercel.app/products')
    .then(res => res.json())
    .then(data =>{
     
      setProducts(data)})
    .catch((error) => {
      console.error(error)
    })
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='text-center'>
      <h1 className='text-2xl font-extrabold'>Category</h1>
     
          {categories.map(category => {
            
          return <ul>
            <li className='mt-5'><Link to='/product-category' className="link link-hover bg-emerald-300 p-2">{category}</Link></li>
          </ul>
          })}
      </div>
    <div>
      <h1 className="text-5xl font-bold">Advertise Product</h1>
      <div className='grid gap-4 md:gird-cols-2 lg:grid-cols-3 my-8'>
        { 
        
          products.map(product =>{
            if(product.advertise)
          {
            return  <ProductCard key={product._id} product={product}></ProductCard>
          }
        })
          
        }
      </div>
    </div>
    <ProductModal product={product}></ProductModal>
    
  </div>
</div>
    );
};

export default Product;