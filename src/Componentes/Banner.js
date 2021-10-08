import React from 'react';
import "../App.css"


function Banner(props) {
    return (
      <div className="App-banner">
           {props.tituloban1}
           {props.tituloban2}
      </div>
    );
  }

  export default Banner;