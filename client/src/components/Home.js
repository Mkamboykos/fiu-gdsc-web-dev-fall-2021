import React from 'react';
import {Link} from 'react-router-dom'
import {Form, InputGroup} from 'react-bootstrap';
import {FaRegUser, FaKey} from 'react-icons/fa';
import {RiLockPasswordLine} from 'react-icons/ri';


function Home(){

  const onClickStartHere = (e) => {
    try{
      <div>
        <Form onKeyPress={this.handleKeyPressLogin} onSubmit={this.verifyCredentials}>    
                    <div className="inputContainer">  
                        <Form.Group className="contentBar">
                            <InputGroup>
                                <InputGroup.Text><FaRegUser/></InputGroup.Text>
                                <Form.Control 
                                    type="username" 
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    className="contentBarText" 
                                    onChange={this.onChangeTextfield}
                                    isInvalid={this.state.errorUsername}
                                />
                            </InputGroup> 
                        </Form.Group>
                            
                        <Form.Group className="contentBar">
                            <InputGroup>
                                <InputGroup.Text><RiLockPasswordLine/></InputGroup.Text>
                                <Form.Control  
                                    type="password"  
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    className="contentBarText"
                                    onChange={this.onChangeTextfield}
                                    isInvalid={this.state.errorPassword}
                                    style={{borderTopRightRadius: '25px', borderBottomRightRadius: '25px', borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}
                                />
                                <div className="invalid-tooltip" style={{ position: 'static', marginTop: '0.3rem'}}>
                                    <span>{this.state.helperText}</span>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        
                        <div className="input_and_login_Container">
                            <Link to="/SignUp" className="link"><button className="signUp_button_home"> <b>SIGN UP</b> </button></Link>
                                
                            <button className="login_button_home" type="submit" id="loginButton" disabled={this.state.btnDisplay} onClick={this.handleLogin}><b>LOGIN</b></button>
                        </div>
                        <div className="forgotPasswordContainer">
                            <Link to="/ForgotPassword" className="link"><b>Forgot Password?</b></Link>
                        </div>                     
                    </div>
                </Form> 
      </div>
    }catch(e){

    }
  }

  const onClickLogin = (e) => {
    try{

    }catch(e){

    }
  }


  
  // const renderLogin = () => {
  //   <div>
  //   </div>
  // }

  return (
    <div>
      <nav>
        <Link to={`/`}>Home Icon</Link>
        <Link to={`/About`}>About</Link>
        <button className="" onClick={onClickLogin()}>Login</button>
      </nav>
        <button className="" onClick={onClickStartHere()}>Start here</button>
        
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
