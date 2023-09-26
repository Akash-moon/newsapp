import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import NewsComp from './Component/NewsComp';
import NewsItemComp from './Component/NewsItemComp';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

export default class App extends Component {
  // "usestrict"
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<NewsComp key="general" pageSize = {3} country="in" category="general"/>} />
            <Route exact path="/business" element={<NewsComp key="buisness" pageSize = {3} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<NewsComp key="entertainment" pageSize = {3} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<NewsComp key="general" pageSize = {3} country="in" category="general"/>} />
            <Route exact path="/health" element={<NewsComp key="health" pageSize = {3} country="in" category="health"/>} />
            <Route exact path="science/" element={<NewsComp key="science" pageSize = {3} country="in" category="science"/>} />
            <Route exact path="/sports" element={<NewsComp key="sports" pageSize = {3} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<NewsComp key="technology" pageSize = {3} country="in" category="technology"/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
      
    )
  }
}

// import React from 'react'

// export default function App() {
//   c = 10;
//   return (
//     <div>
//       thius is {c}
//     </div>
//   )
// }
