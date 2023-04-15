import React from 'react'

const BookItem = ({key , book}) => {
  return (
    <div className='bookItem-container' >
        <img width={250} height={250} src={book.imageUrl} alt='product name'/>
        <div className='content'>
        <p className='name'>{book.name}</p>
        <p className='author'>{book.author}</p>
        <p className='box'>
            <span className='price'>{book.price}$</span>
            <span className='addToCart'><button>Add to cart</button></span>
        </p>
        </div>
    </div>
  )
}

export default BookItem