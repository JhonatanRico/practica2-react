import React from 'react';
import "../App.css"


function Footer(props) {
    return (
      <div className="App-footer">
      {props.pie}
      </div>
    );
  }

  export default Footer;