import React from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';


function App() {
  return (
    <div className="App">
     <Banner tituloban1= "Desarrollo de Aplicaciones de Dispositivos Moviles"/>
     <Header
     
     /> 
     <Banner tituloban2= "8/Oct/2021"/>
     <Body
      practica="Practica 1-Unidad 2"  
       tema1 = "1.-Tipos de Componentes"
       tema2 = "2.-Contenedores"
       tema3 = "3.-Usar mas de un componente"
       tema4 = "4.-Funciones"
       tema5 = "5.-Props"
       tema6 = "6.-Prop-types"
       tema7 = "7.-DefaultProps"
     />  
     <Footer
     pie= "Copyright ©; Todos los derechos reservados" 
     />
    </div>
     
      
  );
}

export default App;
