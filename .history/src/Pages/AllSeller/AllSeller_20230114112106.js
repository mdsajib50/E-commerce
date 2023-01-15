import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Seller successfully Delete');
const AllSeller = () => {
    const [sellers, setSellers] = useState([])
    fetch('http://localhost:5001/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const filterSellers = data.filter((seller) => seller.role === 'seller');
      setSellers(filterSellers)
    })
    .catch(err => console.error(err));
  
    const handelDelete = _id =>{
      const proceed = window.confirm('Are you sure, Delete this Seller');
      if (proceed) {
          fetch(`http://localhost:5001/user/${_id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
          
              if (data.deletedCount > 0) {
                 notify()
                  const remaining = sellers.filter(seller => seller._id !== _id);
                  setSellers(remaining)
              }
          })
          .catch(err => console.error(err))
      }
  }
      return (
          <div className="overflow-x-auto">
              <h1 className='text-2xl font-semibold my-5'>All Sellers</h1>
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
          <th><button onClick={()=>handelDelete(seller._id)} className='btn btn-warning'>Delete</button></th>
        </tr>
        })}
      </tbody>
    </table>
    <Toaster/>
  </div>
      );
  };

export default AllSeller;