import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

function Home(){

  const [showStart, setShowStart] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const {register, handleSubmit, watch, formState: { errors }} = useForm();


  //console.log(watch("Username")); // you can watch individual input by pass the name of the input

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


  //show start here form when clicking on Sign Up button from Login Form
  const showSignUp = () =>{
    setShowStart(true)
    setShowLogin(false)
  }

  // Username and Password data when submitted from Login Form
  const loginFormSubmit = (data) => {
    if (data){
      //make api call here
      //console.log(data.Username);

      Axios.post('localhost:5000/Login/User', {
            username: data.Username,
            password: data.Password,
        }).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error)
        })

    }
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
          <br/>
          <div className='loginLogoContainer'>
            <span>Logo</span>
          </div>
          <br/>
          <div className='loginLabelsContainer'>
            <form onSubmit={handleSubmit(loginFormSubmit)}>
              <div className='loginInputsContainer'>
                <input type="text" placeholder="Username" {...register("Username", {required: true, min: 1, maxLength: 20, pattern: /^[A-Za-z]+$/i})} />
                {errors?.Username?.type === "required" && <p>Field cannot be empty</p>}
                {errors?.Username?.type === "maxLength" && (<p>Username cannot exceed 20 characters</p>)}
                {errors?.Username?.type === "pattern" && (<p>Alphabetical characters only</p>)}
                <br/>
                <input type="password" placeholder="Password" {...register("Password", {required: true, min: 1, maxLength: 20})} />
                {errors?.Password?.type === "required" && <p>Field Cannot be Empty</p>}
                {errors?.Password?.type === "maxLength" && (<p>Password cannot exceed 20 characters</p>)}
                {/* See more examples at https://react-hook-form.com/ */}
              </div>
              <br/>
              <div className='loginButtonsContainers'>
                <button className='loginButtons' onClick={() => showSignUp()}>SIGN UP</button>
                <button className='loginButtons' type="submit">LOGIN</button> 
              </div>
            </form>
          </div>
          <br/>
          <div>
            <Link to={`/Forgot`} className="">Forgot Password?</Link>
          </div>
          <hr/>
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