import React from 'react';
import "../App.css"
import logotec from '../logotec.jpg';


function Header() {
    return (
      <div className="App-header">
      <img src={logotec}/>
      </div>
    );
  }

  export default Header;