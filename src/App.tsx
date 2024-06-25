import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// Ensure Bootstrap and jQuery are imported
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import $ from 'jquery';
import Content from './components/Content';
function App() {
  return (
   <>
   <Header/>
   <Content/>
   <Footer/>
   </>
  );
}

export default App;
