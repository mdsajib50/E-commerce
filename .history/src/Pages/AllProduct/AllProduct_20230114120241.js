import React from 'react';

const AllProduct = () => {
    const [allProduct, setAllProduct] =useState([])
    fetch('http://localhost:5001/all-products')
    .th
    return (
        <div>
            <h1>All Products</h1>
        </div>
    );
};

export default AllProduct;