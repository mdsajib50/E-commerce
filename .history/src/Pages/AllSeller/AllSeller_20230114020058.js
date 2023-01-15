import React from 'react';

const AllSeller = () => {
    const [Sellers, setSellers]
    fetch('http://localhost:5001/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const sellers = data.filter((seller) => seller.role === 'seller')
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
         users.map(user =>{
          return <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <th><button>Delete</button></th>
        </tr>
        })}
      </tbody>
    </table>
  </div>
      );
  };

export default AllSeller;