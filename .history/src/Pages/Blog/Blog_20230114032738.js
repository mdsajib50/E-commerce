import React from 'react';

const Blog = () => {
    return (
        <div> 
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What are the different ways to manage a state in a React application?</h1>
                <p>
                The Four Kinds of React State to Manage -
Local state.
Global state.
Server state.
URL state.
                </p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 my-2'>
                <h1 className ='font-semibold text-lg'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;