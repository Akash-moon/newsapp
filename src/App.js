import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import NewsComp from './Component/NewsComp';
import NewsItemComp from './Component/NewsItemComp';

export default class App extends Component {
  // "usestrict"
  render() {
    return (
      <>
        <Navbar/>
        <NewsComp pageSize={3}/>
      </>
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
