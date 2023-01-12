import React, { useState } from 'react';

const AllUser = () => {
  const [users, setUsers] =useState()

  fetch('http://localhost:5001/users')
  
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
      
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <th><button>Delete</button></th>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default AllUser;