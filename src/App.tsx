import React from 'react';
import {Routes, Route, Router} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Pantries from './pages/Pantries';
import Resources from './pages/Resources';
import About from './pages/About';

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
