import React, { useState } from 'react';

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([])
    fetch('http://localhost:5001/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const filterSellers = data.filter((seller) => seller.role === 'seller');
      setBuyers(filterSellers)
    })
    .catch(err => console.error(err));
  
      return (
          <div className="overflow-x-auto">
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
         sellers.map(seller =>{
          return <tr key={seller._id}>
          <td>{seller.name}</td>
          <td>{seller.email}</td>
          <td>{seller.role}</td>
          <th><button>Delete</button></th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
      );
  };

export default AllBuyer;