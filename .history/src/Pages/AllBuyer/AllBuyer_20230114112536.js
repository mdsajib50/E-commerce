import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Buyer successfully Delete');
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

    const handelDelete = _id =>{
      const proceed = window.confirm('Are you sure, Delete this Buyer');
      if (proceed) {
          fetch(`http://localhost:5001/user/${_id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
          
              if (data.deletedCount > 0) {
                 notify()
                  const remaining = buyers.filter(buyer => buyer._id !== _id);
                  setBuyers(remaining)
              }
          })
          .catch(err => console.error(err))
      }
  }
  
      return (
          <div className="overflow-x-auto">
              <h1 className='text-2xl font-semibold my-5'>All Buyers</h1>
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
          <th><button onClick={()=>handelDelete(b)}>Delete</button></th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
      );
  };

export default AllBuyer;