import React from 'react'
import {useDispatch , useSelector} from "react-redux";
import { AddToCart , deleteProduct, resetCart } from '../Redux/cartSlice';


const BookItem = ({key , book}) => {

  const dispatch = useDispatch()

const list = useSelector(state => state.cart)


  const handleAddToCart = (book)=>{
    dispatch(AddToCart({...book}))
  }

  

  return (
    <div className='bookItem-container' >
        <img width={250} height={250} src={book.imageUrl} alt='product name'/>
        <div className='content'>
        <p className='name'>{book.name}</p>
        <p className='author'>{book.author}</p>
        <p className='box'>
            <span className='price'>{book.price}$</span>
            <span className='addToCart' onClick={()=>handleAddToCart(book)}><button>Add to cart</button></span>
        </p>
        </div>
    </div>
  )
}

export default BookItem