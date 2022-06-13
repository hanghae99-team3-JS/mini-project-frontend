import React from 'react';
import './App.css';
import {    
  Routes, 
  Route 
} from "react-router-dom";
// import axios from "axios";
import Header from "./components/layout/Header";
import HeaderLogin from "./components/layout/HeaderLogin";
import Main from './components/Main';
import SignUp from './components/Signup';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Category from './components/Category';
import Category2 from './components/Category2';
import Category3 from './components/Category3';
import Write from './components/Write';
import Detail from './components/Detail';


function App() {



  return (
    <div className="App">
    <>
        <Routes>
          <Route path="/header" element={<Header/>}/>
          <Route path="/headerlogin" element={<HeaderLogin/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/category/1" element={<Category/>}/>
          <Route path="/category/2" element={<Category2/>}/>
          <Route path="/category/3" element={<Category3/>}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>      
    </>
    </div>
  );
}

export default App;
