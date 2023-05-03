import React from 'react';
import {Routes, Route, Router} from "react-router-dom"
import './App.css';
import Header from './Components/PageContainer/Header';
import Footer from './Components/PageContainer/Footer';
import HomePage from './Components/Pages/HomePage';
import Pantries from './Components/Pages/Pantries';
import Resources from './Components/Pages/Resources';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index element = {<HomePage/>}/>
          <Route path="/pantries" element = {<Pantries/>}/>
          <Route path="/resources" element = {<Resources/>}/>
          <Route path="/about" element = {<About/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
