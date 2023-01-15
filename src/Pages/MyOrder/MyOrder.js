import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderTable from './OrderTable';

const MyOrder = () => {
    const {user,logOut} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch(`https://e-commerce-server-mdsajib50.vercel.app/booking?email=${user?.email}`,{
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then(res => {
          if(res.status === 401 || res.status === 403){
             return logOut()
          }
          return res.json()
      })
        .then(data =>{
            return setBookings(data)
        })
        .catch(er => console.error(er))
    },[user?.email])
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
         
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {
               bookings.map(booking => <OrderTable key={booking._id} booking={booking}></OrderTable>)
            }
          </tbody>
        </table>
        {/* <Toaster/> */}
      </div>
    );
};

export default MyOrder;