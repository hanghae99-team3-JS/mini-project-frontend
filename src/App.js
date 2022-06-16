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
import Write from './components/Write';
import Detail from './components/Detail';
import Update from './components/Update';
import Card from './components/Card';


function App() {

 
  return (
    <div className="App">
    <>

        <Header></Header>
        <HeaderLogin></HeaderLogin>
        <Routes>
          {/* <Route path="/header" element={<Header/>}/> */}          
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/update/:id" element={<Update />}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/detail/:id/:num" element={<Detail />}/>
        </Routes>      
    </>
    </div>
  );
}

export default App;
