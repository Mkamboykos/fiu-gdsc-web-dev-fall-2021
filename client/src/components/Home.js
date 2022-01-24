import React from 'react';
import {Link} from 'react-router-dom'

function Home(){

  const onClickLogin = (e) => {
    try{

    }catch(e){

    }
  }

  const onClickSignup = (e) => {
    try{

    }catch(e){

    }
  }

    return (
      <div>
        <nav>
          <Link to={`/`}>Home Icon</Link>
        </nav>
          <button className="" onClick={onClickLogin()}>Login</button>
          <button className="" onClick={onClickSignup()}>Sign up</button>
          <Link to={`/Forgot`} className="" >Forgot Password?</Link>
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
