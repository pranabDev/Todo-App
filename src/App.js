import React from 'react';
import Navber from './component/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  return (
    <div>
      <Navber/> 
      <ToastContainer position='top-center' autoClose={1000} />     
    </div>
  );
};

export default App;