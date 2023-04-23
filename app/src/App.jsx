import {Routes , Route , Link} from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";



function App() {
  

  return (
   <>
   

    <div className='header-container'>
      <Header/>
    </div>

    <div className='routes'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
   
   </>
  )
}

export default App
