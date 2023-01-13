import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import ProductCategory from '../Pages/Home/Product/ProductCategory';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

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
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/product-category/:id',
                loader:({params})=> fetch(`https://e-commerce-server-virid.vercel.app/product-category/${params.id}`),
                element:<ProductCategory></ProductCategory>
            },
            {
                path:'/deshboard'
            }
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }

])

export default router;