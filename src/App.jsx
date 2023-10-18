import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Shop from './componants/Shop';
// import { Home } from './componants/pages/Home';
// import { About } from './componants/pages/About';
// import { Services } from './componants/pages/Services';
// import { Blog } from './componants/pages/Blog';
// import { Contact } from './componants/pages/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Shop/>

    </>
  );

}



export default App;
