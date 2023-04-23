import React from 'react';
import {Link} from "react-router-dom";

import { useSelector } from 'react-redux';

import { BsCartCheckFill } from 'react-icons/bs';


const Header = () => {

  const list = useSelector(state => state.cart)
  console.log(list.cart?.length)

  return (
    <div className='header'>
        <div className='home-link'>
            <Link to={'/'}>Shopping</Link>
        </div>
        <div className='cart-link'>
            <Link to={'/cartPage'}>
              <span><BsCartCheckFill/>{list?.cart?.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Header