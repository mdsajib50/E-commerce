import React, { useState } from 'react';

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([])
    fetch('http://localhost:5001/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const filterBuyer = data.filter((buyer) => buyer.role === 'buyer');
      setBuyers(filterBuyer)
    })
    .catch(err => console.error(err));
  
      return (
          <div className="overflow-x-auto">
              <h1 className='text-2xl font-semibold my'>All Buyers</h1>
    <table className="table table-zebra w-full">
     
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {
         buyers.map(buyer =>{
          return <tr key={buyer._id}>
          <td>{buyer.name}</td>
          <td>{buyer.email}</td>
          <td>{buyer.role}</td>
          <th><button>Delete</button></th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
      );
  };

export default AllBuyer;