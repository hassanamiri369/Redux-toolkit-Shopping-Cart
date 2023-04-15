import React from 'react';
import BookProduct from "../data/products.json";


// component
import BookItem from '../components/BookItem';


const Home = () => {
  return (
    <div className='home-container'>
      {BookProduct.map((book , index) =>(
        <div key={book.id}>
          <BookItem book={book}/>
        </div>
      ))}
    </div>
  )
}

export default Home