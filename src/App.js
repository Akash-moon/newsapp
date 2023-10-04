import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import NewsComp from './Component/NewsComp';
import NewsItemComp from './Component/NewsItemComp';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

export default class App extends Component {

  // "usestrict"
  // pageSize = 3y
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar
          height={2}
          color='#f11947'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route exact path="/" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize = {3} country="in" category="general"/>} />
            <Route exact path="/business" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="buisness" pageSize = {3} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize = {3} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize = {3} country="in" category="general"/>} />
            <Route exact path="/health" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize = {3} country="in" category="health"/>} />
            <Route exact path="science/" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize = {3} country="in" category="science"/>} />
            <Route exact path="/sports" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize = {3} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<NewsComp setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize = {3} country="in" category="technology"/>} />
            
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
