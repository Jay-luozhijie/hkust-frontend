import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SigninScreen from './screens/SigninScreen'
import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
function App() {
  return (
      <BrowserRouter>
            <div className="grid-container">
              <main>
                <Navbar></Navbar>
                <div>
                  <Routes>
                    <Route path = "/" element={<HomeScreen/>}></Route>
                    <Route path = "/signin" element={<SigninScreen/>}></Route>
                  </Routes>
                </div>
              </main>
            </div>
        </BrowserRouter>);
}   

export default App;
