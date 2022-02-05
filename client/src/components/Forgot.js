import React from 'react';
import styled from 'styled-components';

// Set up forgot password page that takes in an email input after clicking 
// a "continue" button. For now, only do the label and button.
// TODO: 
/*
    1. Create label for email
    2. add continue button under email label 
    3. add a small description thats says "please type in your password"
    4. (optional) validate input for email
*/ 

const Button = styled.button`
  background-color: #3949ab;
  color: white;
  padding: 5px 15 px;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  `

function clickMe(){
  alert('Please type in your password')
}

function Forgot(){

    return (
      <div>

        <form>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
          {/* <input type="submit" value="Submit" />*/} 
        </form>

        <Button onClick={clickMe}>
          Continue
        </Button>
      </div>
    )
  }

  export default Forgot;