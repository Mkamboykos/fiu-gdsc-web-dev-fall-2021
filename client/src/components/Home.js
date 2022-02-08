import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Form, InputGroup} from 'react-bootstrap'
import {TextField, createTheme, MuiThemeProvider,InputAdornment, IconButton, FormHelperText, MenuItem, FormControl, InputLabel, withStyles, Select, FormControlLabel, Checkbox} from '@material-ui/core'
import {FaRegUser, FaKey} from 'react-icons/fa';

function Home(){

  const [showStart, setShowStart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const submitLoginForm = () => {
    const loginFormDetails = {
        'Username' : username,
        'Password' : password
    }
    console.log(loginFormDetails);
}


  // function for sign up pop-up view
  const StartHereView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <button onClick={() => setShowStart(false)}> X </button>

          {/* Use the logic from LoginView to create the Sign up form here */}
        </div>
      </div>
    )
  }

  const showSignUp = () =>{
    setShowStart(true)
    setShowLogin(false)
  }


  // function for login form pop-up view
  const LoginView = () =>{
    return (
      
      <div className='loginPanel'>
        <div className='loginContainer'>

          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowLogin(false)}> X </button>
          </div>

          <div className='loginTitleContainer'>
            <h1>Title</h1>
          </div>

          <div className='loginLogoContainer'>
            <p>Logo</p>
          </div>

          <div className='loginLabelsContainer'>
            {/* The input stops after a letter is typed, make it so that it can be continuously typed and it does not stop */}
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <div className='loginButtonsContainers'>
            <button className='loginButtons' onClick={() => showSignUp()}>SIGN UP</button>
            <button className='loginButtons' type="submit" onClick={submitLoginForm}>LOGIN</button>
          </div>

          <div>
            <Link to={`/Forgot`} className="">Forgot Password?</Link>
          </div>
        </div>
      </div>
    )
  }


  // everything starts here
  return (
    <div>
      {showStart ? <StartHereView/>: ""}
      {showLogin ? <LoginView/> : ""}
      <nav>
        <Link to={`/`}>Home Icon</Link>
        <Link to={`/About`}>About</Link>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </nav>
      
      <div className='startHereButtonPlacement'>
        <button className="" onClick={() => setShowStart(true)}> Start Here </button>
      </div>
    </div>
  )
}

export default Home;

































// import React from 'react'
// import {Link} from 'react-router-dom'
// import {Row, Col, Container} from 'react-bootstrap'
// import RecipeCard from '../components/RecipeCard/RecipeCard'
// function Home() {

//     return (
//       <div>
//         <Link to="/Dashboard" className="link">To Dashboard</Link>
//         <Container>
//   <Row>
   
//   </Row>
//   <Row noGutters>
//     <Col  noGutters lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
//     <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
//     <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
//     <Col lg = {3} md = {4} sm = {6} xs = {6} className = "align-items-center justify-content-center NoGutters"><RecipeCard/></Col>
//   </Row>
// </Container>
        
        
//       </div>
//     )
// }

// export default Home;
