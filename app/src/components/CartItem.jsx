import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const CartItem = () => {

    const dispatch = useDispatch;
    const cartitem = useSelector(state => state.cart)



  return (
    <>
    <div className='content-cart'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Dec/Inc</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {cartitem.cart?.map(item => (
            <tr>
              <td>{item.id}</td>
              <td><img width={50} height={50} src={item.imageUrl} /></td>
              <td style={{maxWidth : "300px"}}>{item.name}</td>
              <td>{item.price}$</td>
              <td >
                <button>-</button>
                <span style={{margin : "0 7px 0 7px"}}>{item.quantity}</span>
                <button>+</button>
              </td>
              <td>
                <button>delete</button>
              </td></tr>
          ))}

        </tbody>
      </table>
    </div>
    </>
  )
}

export default CartItem