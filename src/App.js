import React from 'react';
// import LoginPage from './LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Reels from './Reels/Reels';
import Explore from './Component/Explore';
import './App.css';
import Message from './Component/Message';
import Profile from './Component/Profile';
import LoginPage from './LoginPage/LoginPage'

function App() {
  return (
    <>      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LoginPage/>} /> 

          <Route path="/home" element={<Home />} />
           <Route path='/explore' element={<Explore/>} /> 
          <Route path='/reels' element={<Reels />} />
          <Route path='/Message' element={<Message/>} /> 
           <Route path='/Profile' element={<Profile/>} /> 
          {/* <Route path='/Settings' element={<Settings/>} /> */}
          {/* <Route path='/Your_Activty' element={<YourActivty/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
