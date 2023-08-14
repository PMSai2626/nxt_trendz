import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import Switch

import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
