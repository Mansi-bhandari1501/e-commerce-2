import React from "react";
import './App.css';
import Header from "./components/header";
import Section1 from "./components/frontpage/section1";
import Login from "./components/sign-up/login";
import Signup from "./components/sign-up/signup";
import Footer from "./components/footer";
import ErrorPage from "./components/ErrorPage"

import { Routes,Route } from "react-router-dom";
import Item from "./components/frontpage/Item";
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      
      <Route path='/' element={<Section1 />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/item' element={<Item />}/>

     </Routes>
     <Footer />
    </div>
  );
}

export default App;
