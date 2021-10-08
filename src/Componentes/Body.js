import React from 'react';
import "../App.css"


function Body(props) {
    return (
      <div className="App-body">
     <p>{props.practica}</p>
        {props.tema1}
     <p>{props.tema2}</p>
        {props.tema3}
     <p>{props.tema4}</p>
        {props.tema5}
     <p>{props.tema6}</p>
        {props.tema7}

      <button type="button" class="btn-primary">Clic aqui</button>

      </div>
    );
  }

  export default Body;