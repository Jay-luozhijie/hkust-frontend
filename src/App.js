import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SigninScreen from './screens/SigninScreen'
import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import './css/body.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS

import PartnerScreen from './screens/PartnerScreen'
import CommunityNewsScreen from './screens/CommunityNewsScreen'
import ClubnewsScreen from './screens/ClubnewsScreen'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
function App() {
  return (
      <BrowserRouter>
            <div className="grid-container">
              <main>
                <Navbar></Navbar>
                <div style={{ minHeight: "0", paddingBottom: "100px"}}>
                  <Routes>
                    <Route path = "/" element={<HomeScreen/>}></Route>
                    <Route path = "/signin" element={<SigninScreen/>}></Route>
                    <Route path = "/Clubnews" element={<ClubnewsScreen/>}></Route>
                    <Route path = "/partner" element={<PartnerScreen/>}></Route>
                    <Route path = "/communityNews" element={<CommunityNewsScreen/>}></Route>
                  </Routes>
                </div>
               
                <Footer></Footer>
              </main>
            </div>
        </BrowserRouter>);
}   

export default App;
