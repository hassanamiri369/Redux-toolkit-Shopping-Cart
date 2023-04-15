import React from 'react';
import BookProduct from "../data/products.json";


// component
import BookItem from '../components/BookItem';


const Home = () => {
  return (
    <div className='home-container' style={{display : "flex" , flexWrap : "wrap" , justifyContent : "center" }}>
      {BookProduct.map((book , index) =>(
        <div key={book.id} style={{display : "flex"  }} >
          <BookItem book={book}/>
        </div>
      ))}
    </div>
  )
}

export default Home