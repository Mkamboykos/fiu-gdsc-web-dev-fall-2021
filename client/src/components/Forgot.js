import React from 'react';
// import styled from 'styled-components';

// Set up forgot password page that takes in an email input after clicking 
// a "continue" button. For now, only do the label and button.

// TODO: 
/*
    1. Create label for email
    2. add continue button under email label 
    3. add a small description thats says "please type in your password"
    4. (optional) validate input for email
*/ 

// const Button = style.button`
//   background-color: blue;
//   color: white;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   text-transform: uppercase;
//   cursor: pointer;
//   box-shadow: 0px 2px lightgray;
//   &:hover {
//     background-color: #283593;
//   }
//   `


function clickMe(){
  alert('You clicked me')
}

function Forgot(){


    return (
      <div>
        <button onClick={clickMe}>
          Button
        </button>
      </div>
    )
  }
  
  export default Forgot;
