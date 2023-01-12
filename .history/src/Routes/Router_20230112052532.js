import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Home from '../Pages/Home/Home/Home';
import ProductCategory from '../Pages/Home/Product/ProductCategory';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sign'
            },
            {
                path:'/product-category/:id',
                loader:({params})=> fetch(`http://localhost:5001/product-category/${params.id}`),
                element:<ProductCategory></ProductCategory>
            }
        ]
    }
])

export default router;