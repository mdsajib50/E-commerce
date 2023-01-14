import React from 'react';

const AllProduct = () => {
    fetch('http://localhost:5001/allproducts')
    return (
        <div>
            <h1>All Products</h1>
        </div>
    );
};

export default AllProduct;