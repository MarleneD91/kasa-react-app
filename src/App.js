import '../src/sass/App.scss';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//pages
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/housing/:housingId" element={<Housing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>  
  )
};

export default App;
