import React from 'react';
import { useLoaderData } from 'react-router';

const ProductCategory = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <>
            p
        </>
    );
};

export default ProductCategory;