import React, { useState } from 'react';
import {Link} from 'react-router-dom'


function Home(){

  const [showHome, setShowHome] = useState(true)
  const [showStart, setShowStart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)


  const oAuthAuthenticator = () =>{
    const google = () => {
      window.open("http://localhost:8000/auth/google", "_self")
    }

    return(
      <div>
        <div onClick={google()}>
          <button>google</button>
        </div>
      </div>
    )
  }
  



  // function for initial home screen view
  const HomeScreenView = () =>{
    return(
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

  // function for sign up pop-up view
  const StartHereView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <button onClick={() => setShowStart(false)}> X </button>
        </div>
      </div>
    )
  }


  // function for login pop-up view
  const LoginView = () =>{
    return (
      <div className='loginPanel'>
        <div className='loginContainer'>
          <button onClick={() => setShowLogin(false)}> X </button>

            
          {oAuthAuthenticator()}


          <Link to={`/Forgot`} className="">Forgot Password?</Link>
        </div>
      </div>
    )
  }

  // conditional rendering
  const renderCondition = () => {
    if(showHome){
      return(
        <div>
          <HomeScreenView/>
        </div>
      )
    }else if (showStart){
      return(
        <div>
          <StartHereView/>
        </div>
      )
    }else if(showLogin){
      return(
        <div>
          <LoginView/>
        </div>
      )
    }
  }

  return (
    <div>
      {renderCondition()}
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
