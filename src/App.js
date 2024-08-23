import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
import SignUp from './screens/SignUp/SignUp.js';

import './css/App.scss';
import './css/PartnerScreen.scss';
import './css/Alumni/HongKong.scss';
import './css/Alumni/Guangzhou.scss';
import './css/Alumni/Beijing.scss'; 
import './css/Alumni/Shanghai.scss';
import './css/Alumni/Shenzhen.scss';

import { useMediaQuery } from 'react-responsive';

import ActivitiesDetailScreen from './screens/ActivitiesDetailScreen.js';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

function App() {

  // 定义屏幕宽度是否小于1400px的媒体查询
  const isLessThan1400px = useMediaQuery({ query: '(max-width: 1399px)' });

  // 根据屏幕宽度设置 paddingTop
  const paddingTop = isLessThan1400px ? '75px' : '144px';

  return (
      <BrowserRouter>
        <AuthProvider>
            <div className="app-container">
              
                <Navbar></Navbar>
                <main className="main-content" style={{ paddingTop }}>
                    <Routes>
                      <Route path = "/" element={<HomeScreen/>}></Route>
                      <Route path = "/signin" element={<SigninScreen/>}></Route>
                      <Route path = "/Clubnews" element={<ClubnewsScreen/>}></Route>
                      <Route path = "/partner" element={<PartnerScreen/>}></Route>
                      <Route path = "/communityNews" element={<CommunityNewsScreen/>}></Route>
                      <Route path = "/communityNews/:id" element={<CommunityNewsDetailScreen/>}></Route>
                      <Route path = "/activities/:id" element={<ActivitiesDetailScreen/>}></Route>
                      <Route path = "/SocialAdvisor" element={<SocialAdvisorScreen/>}></Route>
                      <Route path = "/AboutUs" element={<AboutUsScreen/>}></Route>
                      <Route path = "/TradingCompetition" element={<TradingCompetition/>}></Route> 
                      <Route path="/TradingCompetition/sign-up" element={<SignUp />} />
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
              </main>
              <Footer></Footer>
            </div>
          </AuthProvider>
        </BrowserRouter>);
}   

export default App;
