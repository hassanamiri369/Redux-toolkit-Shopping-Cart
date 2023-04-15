import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
        <div className='home-link'>
            <Link to={'/'}>Shopping</Link>
        </div>
        <div className='cart-link'>
            <Link to={'/cart'}>Cart</Link>
        </div>
    </div>
  )
}

export default Header