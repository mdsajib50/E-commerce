import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyProductTable from './MyProductTable';
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Delete successfully');
const MyProduct = () => {
   const{user, logOut} = useContext(AuthContext)
   const [products, setProducts] = useState([])
   const handelDelete = _id =>{
    const proceed = window.confirm('Are you sure, Delete this Product');
    if (proceed) {
        fetch(`https://e-commerce-server-mdsajib50.vercel.app/product/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        
            if (data.deletedCount > 0) {
               notify()
                const remaining = products.filter(product => product._id !== _id);
                setProducts(remaining)
            }
        })
        .catch(err => console.error(err))
    }
}

const handelUpdate = _id =>{
    fetch(`https://e-commerce-server-mdsajib50.vercel.app/product/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify({advertise: 'Advertised'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                const remaining = products.filter(product => product._id !== _id);
                const advertised = products.find(product => product._id === _id);
                advertised.advertise = 'advertised'
                const newProducts = [advertised,...remaining]
                setProducts(newProducts)
                alert('Update successful')
            }

        })
        .catch(err =>console.error(err))
}
    useEffect(()=>{
        fetch(`https://e-commerce-server-mdsajib50.vercel.app/myproduct?email=${user?.email}`,{
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
            return setProducts(data)
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
              <th>Category</th>
              <th>Details</th>
              <th>Mobile</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {
                products.map(product => <MyProductTable key={product._id} product={product} handelDelete={handelDelete} handelUpdate={handelUpdate}></MyProductTable>)
            }
          </tbody>
        </table>
        <Toaster/>
      </div>
    );
};

export default MyProduct;