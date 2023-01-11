import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-steal-200 text-base-content rounded mt-10">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Blog</a> 
                <a className="link link-hover">Product</a>
            </div> 
            <div>
                <p>Copyright © 2023 - All right reserved by Laptop Shop</p>
            </div>
</footer>
    );
};

export default Footer;