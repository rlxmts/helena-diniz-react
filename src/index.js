import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const EstiloGlobal = createGlobalStyle`

.app-recolhido{
    position:relative;
    left: -20vw;

    @media screen and (max-width: 768px){
      left: -80vw !important;
    }
}

.movimentar{
  right:0;
}

@font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins/Poppins-SemiBold.ttf") format('truetype');
    font-weight: 600;
}

@font-face {
    font-family: "Playfair Display";
    src: url("./fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf") format('truetype');
    font-weight: 400 900;
}

@font-face {
    font-family: "Cormorant SC";
    src: url("./fonts/Cormorant_SC/CormorantSC-Light.ttf") format('truetype');
    font-weight: 300;
}

@font-face {
    font-family: "Quicksand";
    src: url("./fonts/Quicksand/Quicksand-VariableFont_wght.ttf") format('truetype');
    font-weight: 300 700;
}

*{
  padding:0;
  margin:0;
  text-transform: none;
  list-style: none;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-family: "Playfair Display";
  font-weight: 300;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>
);
