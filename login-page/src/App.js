import React from "react";
import Login from "./component/login/login";
import Home from "./component/Home/Home"
import SignUp from "./component/SignUp/SingUp";
import NavBarComponent from "./component/NavBar/NavBar";
import ContactUs from './component/ContactUs/ContactUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent />
          <Routes>
              <Route exact path ="/" element= {<Home />} />
              <Route exact path = "/Login" element={<Login />} />
              <Route exact path = '/Signup' element={<SignUp />} />
              <Route exact path = '/Contactus' element={<ContactUs />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
