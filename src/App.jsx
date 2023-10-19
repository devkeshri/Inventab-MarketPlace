

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Shop from './componants/Shop';
import SingleProduct from './componants/SingleProduct';
import Header from './componants/Header';
import Home from './componants/Home';
// import { Home } from './componants/pages/Home';
// import { About } from './componants/pages/About';
// import { Services } from './componants/pages/Services';
// import { Blog } from './componants/pages/Blog';
// import { Contact } from './componants/pages/Contact';





function App() {
  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/singleproduct' element={<SingleProduct />} />
        </Routes>

      </BrowserRouter>


    </>
  );

}



export default App;
