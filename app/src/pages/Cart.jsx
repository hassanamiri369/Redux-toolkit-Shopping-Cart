import React from 'react';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  const dispatch = useDispatch;
  const cartitem = useSelector(state => state.cart)



  return (
    <>
      <div className='cart-count'>Count Product in Cart : {cartitem.cart?.length}</div>

      {cartitem.cart?.length === 0 ? <h2 style={{paddingLeft : "40px" , color : "red"}}>Cart is Empty</h2> :
        <CartItem/>

      }
    </>
  )
}

export default Cart