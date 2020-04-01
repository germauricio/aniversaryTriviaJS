import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mauri from './puntosMauri';
import Michi from './puntosMichi';
import Pregunta from './pregunta';


function App() {
  return (
    <div className="App">
      <hr></hr>
      <div id="container">
        <div id="leftThing">
          <img src="mauri.jpg" class="pibes"   height= "300px" alt="Maurichi"></img>
          <br></br>
          <Mauri />
       </div>
     
        <div id="versus">
          <img src="unnamed.png" height= "150px" alt="vs"></img> 
        </div>

        <div id="rightThing">
            <img src="michi.jpg" class="pibes" height= "300px" alt="Michi"></img>
            <br></br>
            <Michi />
        </div>
      </div>
      <div ><Pregunta /></div>
      
    </div>
  );
}

export default App;
