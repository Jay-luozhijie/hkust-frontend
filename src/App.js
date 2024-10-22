import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SigninScreen from './screens/SigninScreen'
import './css/navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import './css/body.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS

import PartnerScreen from './screens/PartnerScreen'
import CommunityNewsScreen from './screens/CommunityNewsScreen'
import ClubnewsScreen from './screens/ClubnewsScreen'
import Beijing from './screens/Alumni/Beijing.js'
import Shanghai from './screens/Alumni/Shanghai.js'
import Hongkong from './screens/Alumni/Hongkong.js'
import Guangzhou from './screens/Alumni/Guangzhou.js'
import Shenzhen from './screens/Alumni/Shenzhen.js'
import Alumni from './screens/Alumni/Alumni.js'

import PrivateRoute from './auth/PrivateRoute';
import AdminPage from './screens/AdminPage.js';
import { useSelector } from 'react-redux';
import {AuthProvider} from './auth/AuthContext.js'
import SocialAdvisorScreen from './screens/SocialAdvisorScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import IntroduceScreen from './screens/IntroduceScreen'
import CommunityNewsDetailScreen from './screens/CommunityNewsDetailScreen.js';
import TradingCompetition from './screens/TradingCompetitionScreen.js';
import './css/App.scss';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
function App() {
  
  return (
      <BrowserRouter>
        <AuthProvider>
            <div className="app-container">
              
                <Navbar></Navbar>
                <main className="main-content">
                    <Routes>
                      <Route path = "/" element={<HomeScreen/>}></Route>
                      <Route path = "/signin" element={<SigninScreen/>}></Route>
                      <Route path = "/Clubnews" element={<ClubnewsScreen/>}></Route>
                      <Route path = "/partner" element={<PartnerScreen/>}></Route>
                      <Route path = "/communityNews" element={<CommunityNewsScreen/>}></Route>
                      <Route path = "/communityNews/:id" element={<CommunityNewsDetailScreen/>}></Route>
                      <Route path = "/SocialAdvisor" element={<SocialAdvisorScreen/>}></Route>
                      <Route path = "/AboutUs" element={<AboutUsScreen/>}></Route>
                      <Route path = "/TradingCompetition" element={<TradingCompetition/>}></Route> 
                      <Route path = "/Introduce" element={<IntroduceScreen/>}></Route>
                      <Route path="/Alumni" element={<Alumni />}>
                        <Route path = "/Alumni/Beijing" element={<Beijing></Beijing>}></Route>
                        <Route path = "/Alumni/Hongkong" element={<Hongkong></Hongkong>}></Route>
                        <Route path = "/Alumni/Shanghai" element={<Shanghai></Shanghai>}></Route>
                        <Route path = "/Alumni/Guangzhou" element={<Guangzhou></Guangzhou>}></Route>
                        <Route path = "/Alumni/Shenzhen" element={<Shenzhen></Shenzhen>}></Route>
                      </Route>
                      <Route path="/adminPage" element={
                        <PrivateRoute>
                          <AdminPage />
                        </PrivateRoute>
                      } />
                    </Routes>
                  
                
               
                <Footer></Footer>
              </main>
            </div>
          </AuthProvider>
        </BrowserRouter>);
}   

export default App;
