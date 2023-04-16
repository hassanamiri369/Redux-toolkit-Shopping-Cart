import React from 'react';
import {Link} from "react-router-dom";

import { useSelector } from 'react-redux';

import { BsCartCheckFill } from 'react-icons/bs';


const Header = () => {

  const list = useSelector(state => state.cart.list)
  console.log(list)

  return (
    <div className='header'>
        <div className='home-link'>
            <Link to={'/'}>Shopping</Link>
        </div>
        <div className='cart-link'>
            <Link to={'/cart'}>
              <span><BsCartCheckFill/>{list?.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Header