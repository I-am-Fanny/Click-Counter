import React from "react";
import '../stylesheets/Button.css';

function Button({ text, isClickButton, clickDrive }){
 return(
  <button
    className={ isClickButton ? 'click-button' : 'restart-button' }
    onClick={clickDrive}>
      {text}
    </button>
 );
}


export default Button;