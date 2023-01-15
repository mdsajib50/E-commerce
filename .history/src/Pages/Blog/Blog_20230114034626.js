import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'> 
            <div className='m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What are the different ways to manage a state in a React application?</h1>
                <p>
                The Four Kinds of React State to Manage - Local state, Global state, Server state, URL state.
                </p>
            </div>
            <div className=' m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>How does prototypical inheritance work?</h1>
                <p>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
            </div>
            <div className=' m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What is a unit test? Why should we write unit tests?</h1>
                <p>Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
            </div>
            <div className=' m-0 mx-auto bg-slate-200 p-6 my-3'>
                <h1 className ='font-semibold text-lg'>React vs. Angular vs. Vue?</h1>
                <p>A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.</p>
            </div>
        </div>
    );
};

export default Blog;