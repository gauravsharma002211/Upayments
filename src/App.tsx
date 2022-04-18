import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './AppRoute';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"


function App() {
  return (   
    <BrowserRouter>
    <div className="App">
     <AppRoute/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
