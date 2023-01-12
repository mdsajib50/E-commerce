import React, { useState } from 'react';

const AllUser = () => {
  const [users, setUsers] =useState([]);

  fetch('http://localhost:5001/users')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setUsers(data)
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
      
      {users.map(user =>{
        return 
      })}
    </tbody>
  </table>
</div>
    );
};

export default AllUser;