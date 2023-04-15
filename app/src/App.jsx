import {Routes , Route , Link} from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  

  return (
   <>
   

    <div className='header-container'>
      <Header/>
    </div>

    <div className='routes'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
   
   </>
  )
}

export default App
