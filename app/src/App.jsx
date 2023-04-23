import {Routes , Route , Link} from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";



function App() {
  

  return (
   <>
   

    <div className='header-container'>
      <Header/>
    </div>

    <div className='routes'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cartPage" element={<CartPage/>}/>
      </Routes>
    </div>
   
   </>
  )
}

export default App
