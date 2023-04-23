import React from 'react';
import BookProduct from "../data/products.json";
import { deleteProduct, AddToCart, resetCart } from '../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

// component
import BookItem from '../components/BookItem';



const Home = () => {

  const cartitem = useSelector(state => state.cart)
  const dispatch = useDispatch()



  return (
    <div className='home-container'>
      {BookProduct.map((book, index) => (
        <div key={book.id} style={{ display: "flex" }} >
          <BookItem book={book} />
        </div>
      ))}
    </div>
  )
}

export default Home