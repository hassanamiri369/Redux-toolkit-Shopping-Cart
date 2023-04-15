import React from 'react';
import {Link} from "react-router-dom";

import { BsCartCheckFill } from 'react-icons/bs';


const Header = () => {
  return (
    <div className='header'>
        <div className='home-link'>
            <Link to={'/'}>Shopping</Link>
        </div>
        <div className='cart-link'>
            <Link to={'/cart'}>
              <span><BsCartCheckFill/></span>
            </Link>
        </div>
    </div>
  )
}

export default Header