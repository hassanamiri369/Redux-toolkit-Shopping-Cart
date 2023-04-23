
import React from 'react';

import { deleteProduct, AddToCart, resetCart } from '../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const CartPage = () => {
    const cartitem = useSelector(state => state.cart)
    const dispatch = useDispatch()
  
    const handleRemove = (item) => {
      dispatch(deleteProduct({ ...item }))
    }
  
    const handleAddToCart = (book) => {
      dispatch(AddToCart({ ...book }))
    }
  
  
  
  
    const totalPrice = cartitem.cart?.reduce((a, b) => a + b.price * b.quantity, 0)
    return (
        <>
            <div>
                <div className='cart-count'>Count Product in Cart : {cartitem.cart?.length}</div>

                {cartitem.cart?.length === 0 ? <h2 style={{ paddingLeft: "40px", color: "red" }}>Cart is Empty</h2> :
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
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td><img width={50} height={50} src={item.imageUrl} /></td>
                                        <td style={{ maxWidth: "300px" }}>{item.name}</td>
                                        <td>{item.price * item.quantity}$</td>
                                        <td >
                                            <button onClick={() => handleRemove(item)}>-</button>
                                            <span style={{ margin: "0 7px 0 7px" }}>{item.quantity}</span>
                                            <button onClick={() => handleAddToCart(item)}>+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => dispatch(resetCart({ ...item }))}>delete</button>
                                        </td></tr>
                                ))}

                            </tbody>
                        </table>

                        <div style={{ display: "flex", justifyContent: "space-around", width: "90%", backgroundColor: "lightgreen" }}>
                            <h2>Total Price :</h2>
                            <h2>{totalPrice}$</h2>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}

export default CartPage