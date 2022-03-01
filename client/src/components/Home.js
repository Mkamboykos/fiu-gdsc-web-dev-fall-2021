import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import homeBackground from '../Images/homeBackground.png'
import logo from '../Images/logo.svg'
import Axios from 'axios';

Axios.defaults.withCredentials = true;

function Home(){

  let navigate = useNavigate();

  const [showStart, setShowStart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showForgot, setShowForgot] = useState(false)
  const [showEnter, setShowEnter] = useState(false)
  const [showSignUp2, setShowSignUp2] = useState(false)
  const [showSignUp3, setShowSignUp3] = useState(false)
  const [showSignUp4, setShowSignUp4] = useState(false)
  const [showSignUp5, setShowSignUp5] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
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

          <button onClick={() => setShowSignUp2(true) & setShowStart(false)}>Continues</button>
        </div>
      </div>
    )
  }

  // sign up 2 view
  const SignUp2View = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowStart(false) & setShowSignUp2(false)}> X </button>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button onClick={() => setShowSignUp3(true) & setShowSignUp2(false) & setShowStart(false)}>Continuess</button>
        </div>
      </div>
    )
  }

  // sign up 3 view
  const SignUp3View = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowSignUp3(false)}> X </button>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button onClick={() => setShowSignUp4(true) & setShowSignUp3(false)}>Continuesss</button>
        </div>
      </div>
    )
  }

  // sign up 4 view
  const SignUp4View = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowSignUp4(false)}> X </button>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button onClick={() => setShowSignUp5(true) & setShowSignUp4(false)}>Continuessss</button>
        </div>
      </div>
    )
  }

  // sign up 5 view
  const SignUp5View = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowSignUp5(false)}> X </button>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button onClick={() => setShowSignUp5(false)}>Submit</button>
        </div>
      </div>
    )
  }


  // forgot password pop-up view
  const ForgotPasswordView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowForgot(false)}> X </button>
          </div>
          
          {/* Use the logic from LoginView to create the Sign up form here */}


          <button onClick={() => setShowEnter(true) & setShowForgot(false)}>Continue</button>

        </div>
      </div>
    )
  }

  // enter code pop-up view
  const EnterCodeView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowEnter(false)}> X </button>
          </div>
          
          {/* Use the logic from LoginView to create the Sign up form here */}


          <button onClick={() => setShowNewPassword(true) & setShowEnter(false)}>Continue 2</button>

        </div>
      </div>
    )
  }

  // new password pop-up view
  const NewPasswordView = () =>{
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <button onClick={() => setShowNewPassword(false)}> X </button>
          </div>
          
          {/* Use the logic from LoginView to create the Sign up form here */}


          <button type='submit' onClick={() => setShowNewPassword(false)}>Submit</button>

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
        let stringUser = res.data.username
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
          <div className='loginFlexContainer'>
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
              <span onClick={() => setShowForgot(true) & setShowLogin(false)} style={{cursor: "pointer"}}>Forgot Password?</span>
            </div>
          </div>
          <hr/>
          <div>
            <button>
              Google
            </button>
          </div>
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
      {showEnter ? <EnterCodeView/> : ""}
      {showNewPassword ? <NewPasswordView/> : ""}
      {showSignUp2 ? <SignUp2View/> : ""}
      {showSignUp3 ? <SignUp3View/> : ""}
      {showSignUp4 ? <SignUp4View/> : ""}
      {showSignUp5 ? <SignUp5View/> : ""}

      <nav>
        <img src={logo} alt="logo" className='logo' loading="lazy"/>
        <Link to={`/About`} style={{textDecoration: "none"}}><button>About</button></Link>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </nav>

      <div className='startHereButtonPlacement'>
        <button className="" onClick={() => setShowStart(true)}> Start Here </button>
      </div>

      <img src={homeBackground} className='homeBackground' alt="" loading="lazy"/>
    </div>
  )
}

export default Home;