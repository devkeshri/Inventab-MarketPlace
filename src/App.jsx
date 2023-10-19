

 import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Shop from './componants/Shop';
import SingleProduct from './componants/SingleProduct';
// import { Home } from './componants/pages/Home';
// import { About } from './componants/pages/About';
// import { Services } from './componants/pages/Services';
// import { Blog } from './componants/pages/Blog';
// import { Contact } from './componants/pages/Contact';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Shop />} /> */}
          <Route path='/shop' element={<Shop />} />
          <Route path='/singleproduct' element={<SingleProduct />} />
        </Routes>

      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Shop/> */}

    </>
  );

}



export default App;
