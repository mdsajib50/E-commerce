import React from 'react';

const OrderTable = ({booking}) => {
    const {_id, name, price,img} =booking
    return (
        <tr>
              <td>{name}</td>
              <td><img className="mask mask-square w-20" src={img} /></td>
              <td>{price}</td>
              <td><button className='btn btn-outline'>Pay</button></td>
            </tr>
    );
};

export default OrderTable;