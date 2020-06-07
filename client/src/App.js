import React from 'react';
//import logo from './logo.svg';
import {Router} from '@reach/router';
import './App.css';
import AllPirates from './views/AllPirates';
import NewPirate from './views/NewPirate';
import SinglePirate from './views/SinglePirate';



function App() {
  return (
    <div className="App">
      <Router>
        <AllPirates path="pirates"/>
        <NewPirate path="/pirates/new"/>
        <SinglePirate path="/pirates/:id" />
      </Router>
      
    </div>
  );
}

export default App;
