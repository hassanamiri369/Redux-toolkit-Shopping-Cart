import React from 'react'

const BookItem = ({key , book}) => {
  return (
    <div className='bookItem-container'>
        <div>{book.name}</div>
    </div>
  )
}

export default BookItem