import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

function Home(){

  let navigate = useNavigate();

  const [showStart, setShowStart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showForgot, setShowForgot] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  // eslint-disable-next-line no-unused-vars
  const {register, handleSubmit, watch, formState: { errors }} = useForm();
  //console.log(watch("Username")); // you can watch individual input by pass the name of the input


  // sign up pop-up view
  const StartHereView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowStart(false)}> X </button>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}
        </div>
      </div>
    )
  }


  // forgot password pop-up view
  const ForgotPasswordView = () =>{
    return (
      <div className='startHerePanel'style={{background: "transparent"}}>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowForgot(false) & setShowLogin(false)}> X </button>
          </div>
          
          {/* Use the logic from LoginView to create the Sign up form here */}
        </div>
      </div>
    )
  }


  // refresh page
  const refreshPage = () => {
    window.location.reload(false);
  }

  // used when login form gets submitted with Username and Password data
  const loginFormSubmit = async (data) => {
    if (data){
      await Axios.post('http://localhost:8000/Login/User', {
            username: data.Username,
            password: data.Password,
      }).then(res => {
        if (res.data.auth === true){
          authenticateUser()
        }
      }).catch(function (error) {
        if (error.response) {
          setErrMsg(error.response.data.error)
          // console.log(error.response.data.error);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
      })
    }
  }


  // authenticate the token provided when the login form gets submitted
  const authenticateUser = () =>{
    Axios.get('http://localhost:8000/Login/User')
    .then(res => {
      if (res.data.LoggedIn === true){
        let stringUser = JSON.stringify(res.data.username)
        redirectUser(stringUser)
      }else if (res.data.message === "Tokens not present"){
        refreshPage()
      }
    }).catch(error => {
      console.log(error)
    })
  }


  // login form pop-up view
  const LoginView = (e) =>{

    // validation conditional message
    if(errors?.Password?.type === "required" || errors?.Username?.type === "required"){
      var validationMsg = <p style={{marginTop: "0.6rem", marginBottom: "-0.6rem"}}>Field(s) Cannot be Empty!</p>
    }else if(errMsg !== ""){
      // eslint-disable-next-line no-redeclare
      var validationMsg = <p style={{marginTop: "0.6rem", marginBottom: "-0.6rem"}}>{errMsg}</p>
    }

    return (
      <div className='loginPanel'>
        <div className='loginContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowLogin(false)}> X </button>
          </div>
          <div className='loginTitleContainer'>
            <h1>Title</h1>
          </div>
          <br/>
          <div className='loginLogoContainer'>
            <span>Logo</span>
          </div>
          <br/>
          <div className='loginLabelsContainer'>
            <form onSubmit={handleSubmit(loginFormSubmit)}>
              <div className='loginInputsContainer'>
                <input type="text" placeholder="Username" {...register("Username", {required: true, min: 1, pattern: /^[A-Za-z]+$/i})}/>
                {errors?.Username?.type === "pattern" && (<p>Alphabetical characters only</p>)}
                <br/>
                <input type="password" placeholder="Password" {...register("Password", {required: true, min: 1, message: errMsg})}/>
                {validationMsg}    
                {/* See more examples at https://react-hook-form.com/ */}
              </div>
              <br/>
              <div className='loginButtonsContainers'>
                <button className='loginButtons' onClick={() => setShowStart(true) & setShowLogin(false)}>SIGN UP</button>
                <button className='loginButtons' type="submit">LOGIN</button> 
              </div>
            </form>
          </div>
          <br/>
          <div>
            <span onClick={() => setShowForgot(true)} style={{cursor: "pointer"}}>Forgot Password?</span>
          </div>
          <hr/>
        </div>
      </div>
    )
  }


  // redirect user to their dashboard 
  const redirectUser = (user) =>{
    if (user !== "") {
        return navigate(`/Dashboard/${user}`);
    }
  }


  // everything starts here
  return (
    <div>
      {showStart ? <StartHereView/>: ""}
      {showLogin ? <LoginView/> : ""}
      {showForgot ? <ForgotPasswordView/> : ""}

      <nav>
        <Link to={`/`}>Home Icon</Link>
        <Link to={`/About`} style={{textDecoration: "none"}}><button>About</button></Link>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </nav>

      <div className='startHereButtonPlacement'>
        <button className="" onClick={() => setShowStart(true)}> Start Here </button>
      </div>
    </div>
  )
}

export default Home;