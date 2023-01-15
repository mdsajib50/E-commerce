import React from 'react';

const MyProductTable = ({product, handelDelete, handelUpdate}) => {
    const {_id, img, seller_name, email,product_name, resale_price, category, details, mobile_number} = product
    return (
        <tr>
              <td>{product_name}</td>
              <td><img className="mask mask-square w-20" src={img} /></td>
              <td>{resale_price}</td>
              <td>{category}</td>
              <td>{details}</td>
              <td>{mobile_number}</td>
              <td><button onClick={()=> handelUpdate(_id)} className='btn btn-outline'>advertised</button></td>
              <td><button onClick={()=> handelDelete(_id)} className='btn btn-outline'>Delete</button></td>
            </tr>
    );
};

export default MyProductTable;