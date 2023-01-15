import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import AddProduct from '../Pages/AddProduct/AddProduct';
import AllBuyer from '../Pages/AllBuyer/AllBuyer';
import AllProduct from '../Pages/AllProduct/AllProduct';
import AllSeller from '../Pages/AllSeller/AllSeller';
import Blog from '../Pages/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import ProductCategory from '../Pages/Home/Product/ProductCategory';
import Login from '../Pages/Login/Login';
import MyOrder from '../Pages/MyOrder/MyOrder';
import MyProduct from '../Pages/MyProduct/MyProduct';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/myorder',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path:'/product-category',
                element:<ProductCategory></ProductCategory>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path:'/allbuyer',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/allproduct',
                element: <AllProduct></AllProduct>
            },
            {
                path:'/myproduct',
                element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            }
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }

])

export default router;