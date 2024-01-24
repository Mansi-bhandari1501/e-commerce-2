import React from "react";
import './App.css';
import Header from "./components/header";
import Section1 from "./components/frontpage/section1";
import Login from "./components/sign-up/login";
import Signup from "./components/sign-up/signup";
import Footer from "./components/footer";

import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/frontpage' element={<Section1 />}/>

     </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
