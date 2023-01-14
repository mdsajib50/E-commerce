import React from 'react';

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
                    allProduct.map(product => )
                }
            </div>
        </div>
    );
};

export default AllProduct;