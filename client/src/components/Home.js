import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import homeBackground from '../Images/homeBackground.png';
import logo from '../Images/logo.svg';
import exitButton from '../Images/exitButton.svg';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

function Home() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [showStart, setShowStart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [showSignUp2, setShowSignUp2] = useState(false);
  const [showSignUp3, setShowSignUp3] = useState(false);
  const [showSignUp4, setShowSignUp4] = useState(false);
  const [showSignUp5, setShowSignUp5] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [errMsgEmail, setErrMsgEmail] = useState('');
  const [errMsgCode, setErrMsgCode] = useState('');
  const [errMsgReset, setErrMsgReset] = useState('');
  const [errMsgSignUp1, setErrMsgSignUp1] = useState('');
  const [errMsgSignUp2, setErrMsgSignUp2] = useState('');
  // eslint-disable-next-line no-unused-vars
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //console.log(watch("Username")); // you can watch individual input by pass the name of the input

  const [peanuts, setPeanuts] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [nuts, setNuts] = useState(false);

  const [wheat, setWheat] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [dairy, setDairy] = useState(false);
  const [fish, setFish] = useState(false);
  const [soy, setSoy] = useState(false);
  const [lactoseIntolerant, setLactoseIntolerant] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [diabetic, setDiabetic] = useState(false);

  const signUp1Submit = async (data) => {
    if (data) {
      console.log(data);
    }
    setShowSignUp2(true);
    setShowStart(false);
  };

  // sign up pop-up view
  const StartHereView = () => {
    // validation conditional message
    if (errors?.FullName?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.Email?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.Username?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errMsgSignUp1 !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          {errMsgSignUp1}
        </p>
      );
    }

    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowStart(false)}
            />
          </div>

          <div className='loginTitleContainer'>
            <h1>
              <b>Sign Up</b>
            </h1>
          </div>
          <br />
          <div className='forgotParagraph'>
            <h5>Let’s get to know you!</h5>
          </div>
          <br />
          <div className='loginLabelsContainer'>
            <form onSubmit={handleSubmit(signUp1Submit)}>
              <div className='loginInputsContainer'>
                <input
                  type='text'
                  placeholder='Full Name'
                  {...register('FullName', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                <input
                  type='text'
                  placeholder='Email'
                  {...register('Email', {
                    required: true,
                    min: 1,
                    pattern: /^\S+@\S+$/i,
                    message: errMsgSignUp1,
                  })}
                />
                <input
                  type='text'
                  placeholder='Username'
                  {...register('Username', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                {validationMsgSignUp1}
                {/* See more examples at https://react-hook-form.com/ */}
              </div>
              <br />
              <div className='loginButtonsContainers'>
                <button className='yellowButton' type='submit'>
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const signUp2Submit = async (data) => {
    if (data) {
      console.log(data);
    }

    setShowSignUp3(true);
    setShowSignUp2(false);
  };

  // sign up 2 view
  const SignUp2View = () => {
    // validation conditional message
    if (errors?.Gender?.type === 'required') {
      var validationMsgSignUp2 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          You must pick an option!
        </p>
      );
    } else if (errMsgSignUp2 !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsgSignUp2 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          {errMsgSignUp2}
        </p>
      );
    }

    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowStart(false) & setShowSignUp2(false)}
            />
          </div>
          <div className='loginTitleContainer'>
            <h1>
              <b>Sign Up</b>
            </h1>
          </div>
          <br />
          <div className='forgotParagraph'>
            <h5>Let’s personalize your experience!</h5>
          </div>
          <br />
          <div className='loginLabelsContainer'>
            <form onSubmit={handleSubmit(signUp2Submit)}>
              <div className='loginInputsContainer'>
                <input
                  type='text'
                  placeholder='Gender'
                  {...register('Gender', {
                    required: true,
                    message: errMsgSignUp2,
                  })}
                />
                {validationMsgSignUp2}
                {/* See more examples at https://react-hook-form.com/ */}
              </div>
              <br />
              <div className='loginButtonsContainers'>
                <button className='yellowButton' type='submit'>
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const signUp3Submit = () => {
    console.log(peanuts);

    setShowSignUp4(true);
    setShowSignUp3(false);
  };

  // sign up 3 view
  const SignUp3View = () => {
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowSignUp3(false)}
            />
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}
          <h1>
            <b>Sign Up</b>
          </h1>
          <br />
          <h6>
            <i>Any allergies or dietary restrictions?</i>
          </h6>

          <div className='signupFlex'>
            <div className='signupFlexRow1'>
              <div className='widthstuff'>
                <input
                  type='button'
                  label='Peanuts'
                  value='Peanuts'
                  className='signup3buttonRow signup3button'
                  onClick={() => setPeanuts(!peanuts)}
                />
                <input
                  type='button'
                  label='Shellfish'
                  value='Shellfish'
                  className='signup3buttonRow signup3button'
                  onClick={() => setShellfish(!shellfish)}
                />
                <input
                  type='button'
                  label='Nuts'
                  value='Nuts'
                  className='signup3buttonRow signup3button'
                  onClick={() => setNuts(!nuts)}
                />
                <input
                  type='button'
                  label='Wheat'
                  value='Wheat'
                  className='signup3buttonRow signup3button'
                  onClick={() => setWheat(!wheat)}
                />
              </div>
              <div className='widthstuff'>
                <input
                  type='button'
                  label='Eggs'
                  value='Eggs'
                  className='signup3buttonRow signup3button'
                  onClick={() => setEggs(!eggs)}
                />
                <input
                  type='button'
                  label='Dairy'
                  value='Dairy'
                  className='signup3buttonRow signup3button'
                  onClick={() => setDairy(!dairy)}
                />
                <input
                  type='button'
                  label='Fish'
                  value='Fish'
                  className='signup3buttonRow signup3button'
                  onClick={() => setFish(!fish)}
                />
                <input
                  type='button'
                  label='Soy'
                  value='Soy'
                  className='signup3buttonRow signup3button'
                  onClick={() => setSoy(!soy)}
                />
              </div>
            </div>

            <div>
              <input
                type='button'
                label='Lactose Intolerant'
                value='Lactose Intolerant'
                className='signup3buttonCol signup3button'
                onClick={() => setLactoseIntolerant(!lactoseIntolerant)}
              />
              <input
                type='button'
                label='Vegetarian'
                value='Vegetarian'
                className='signup3buttonCol signup3button'
                onClick={() => setVegetarian(!vegetarian)}
              />
              <input
                type='button'
                label='Gluten Free'
                value='Gluten Free'
                className='signup3buttonCol signup3button'
                onClick={() => setGlutenFree(!glutenFree)}
              />
              <input
                type='button'
                label='Vegan'
                value='Vegan'
                className='signup3buttonCol signup3button'
                style={{ backgroundColor: `${vegan && 'yellow'}` }}
                onClick={() => setVegan((state) => !state)}
              />
              <input
                type='button'
                label='Diabetic'
                value='Diabetic'
                className='signup3buttonCol signup3button'
                onClick={() => setDiabetic(!diabetic)}
              />
            </div>
          </div>
          <button className='yellowButton' onClick={() => signUp3Submit()}>
            Continue
          </button>
        </div>
      </div>
    );
  };

  // sign up 4 view
  const SignUp4View = () => {
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowSignUp4(false)}
            />
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button
            className='yellowButton'
            onClick={() => setShowSignUp5(true) & setShowSignUp4(false)}
          >
            Continuessss
          </button>
        </div>
      </div>
    );
  };

  // sign up 5 view
  const SignUp5View = () => {
    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowSignUp5(false)}
            />
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}

          <button
            className='yellowButton'
            onClick={() => setShowSignUp5(false)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  // used when forgot password email form gets submitted with Email data
  const forgotEmailSubmit = async (data) => {
    if (data) {
      await Axios.post('http://localhost:8000/forget/email', {
        email: data.Email,
      })
        .then((res) => {
          if (res.data.code) {
            setEmail(data.Email);
            setCode(res.data.code);
          }
        })
        .catch(function (error) {
          if (error.response) {
            setErrMsgEmail(error.response.data.error);
            // console.log(error.response.data.error);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          }
        });
    }
  };

  const forgotContinueClick = () => {
    if (code !== undefined) {
      setShowEnter(true);
      setShowForgot(false);
    } else {
      return;
    }
    console.log(code);
  };

  // keeps on checking for code
  useEffect(() => {
    forgotContinueClick();
  });

  // forgot password pop-up view
  const ForgotPasswordView = () => {
    // validation conditional message
    if (errors?.Email?.type === 'required') {
      var validationMsg = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errMsgEmail !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsg = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          {errMsgEmail}
        </p>
      );
    }

    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowForgot(false)}
            />
          </div>
          <br />
          <div className='loginTitleContainer'>
            <h1>
              <b>Forgot</b>
            </h1>
            <h1>
              <b>Password?</b>
            </h1>
          </div>
          <br />
          <div className='forgotParagraph'>
            <h5>
              Don’t worry! Just fill in your email and we’ll send you a link to
              reset your password.
            </h5>
          </div>
          <br />
          <div className='loginLabelsContainer'>
            <form onSubmit={handleSubmit(forgotEmailSubmit)}>
              <div className='loginInputsContainer'>
                <input
                  type='email'
                  placeholder='Email'
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                    message: errMsgEmail,
                  })}
                />
                {validationMsg}
                {/* See more examples at https://react-hook-form.com/ */}
              </div>
              <br />
              <div className='loginButtonsContainers'>
                <button className='yellowButton' type='submit'>
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const enterCodeSubmit = async (data) => {
    if (data) {
      let combinedCode = parseInt(
        data.Code1 + data.Code2 + data.Code3 + data.Code4
      );
      let codeProvided = code;

      if (combinedCode === codeProvided) {
        setCode(undefined);
        setShowNewPassword(true);
        setShowEnter(false);
      } else {
        setErrMsgCode('incorrect code');
      }
      console.log(combinedCode);
    }
  };

  const handleKeyPressCode = (event) => {
    const form = event.target.form;
    let index = [...form].indexOf(event.target);
    if (event.key.toLowerCase()) {
      form.elements[index + 1].focus();
    }
  };

  // const handleAutoKeyPressCode = (event) => {
  //   const form = event.target.form;
  //   let index = [...form].indexOf(event.target);
  // }

  // enter code pop-up view
  const EnterCodeView = () => {
    // validation conditional message
    if (errors?.Code1?.type === 'required') {
      var validationMsgCode = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.Code2?.type === 'required') {
      // eslint-disable-next-line no-redeclare
      var validationMsgCode = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.Code3?.type === 'required') {
      // eslint-disable-next-line no-redeclare
      var validationMsgCode = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.Code4?.type === 'required') {
      // eslint-disable-next-line no-redeclare
      var validationMsgCode = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errMsgCode !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsgCode = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          {errMsgCode}
        </p>
      );
    }

    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setCode(undefined) & setShowEnter(false)}
            />
          </div>
          <br />
          <div className='loginTitleContainer'>
            <h1>
              <b>Enter Code</b>
            </h1>
          </div>
          <br />
          <div className='forgotParagraph'>
            <h5>
              We’ve sent a four-digit code to the email provided. Please enter
              the code to reset your password.
            </h5>
          </div>
          <br />
          <div
            className='loginLabelsContainer'
            style={{ flexDirection: 'column', width: '100%' }}
          >
            <form onSubmit={handleSubmit(enterCodeSubmit)}>
              <div className='forgotCodeContainer'>
                <div className='forgotCodeRow'>
                  <input
                    type='text'
                    maxLength='1'
                    onKeyUp={handleKeyPressCode}
                    className='codeButton'
                    placeholder=''
                    {...register('Code1', {
                      required: true,
                      message: errMsgCode,
                    })}
                  />
                  <input
                    type='text'
                    maxLength='1'
                    onKeyUp={handleKeyPressCode}
                    className='codeButton'
                    placeholder=''
                    {...register('Code2', {
                      required: true,
                      message: errMsgCode,
                    })}
                  />
                  <input
                    type='text'
                    maxLength='1'
                    onKeyUp={handleKeyPressCode}
                    className='codeButton'
                    placeholder=''
                    {...register('Code3', {
                      required: true,
                      message: errMsgCode,
                    })}
                  />
                  <input
                    type='text'
                    maxLength='1'
                    className='codeButton'
                    placeholder=''
                    {...register('Code4', {
                      required: true,
                      message: errMsgCode,
                    })}
                  />
                </div>
                {validationMsgCode}
                {/* See more examples at https://react-hook-form.com/ */}
              </div>

              <br />
              <div
                className='loginButtonsContainers'
                style={{ paddingTop: '2rem' }}
              >
                <button className='yellowButton'>Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const resetFormSubmit = async (data) => {
    if (data) {
      await Axios.put(`http://localhost:8000/forget/reset`, {
        email: email,
        resetPassword: data.PasswordReset,
        confirmPassword: data.PasswordConfirm,
      })
        .then((res) => {
          if (res.data.code === 200) {
            setShowNewPassword(false);
          }
        })
        .catch(function (error) {
          if (error.response) {
            setErrMsgReset(error.response.data.error);
            // console.log(error.response.data.error);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          }
        });
    }
  };

  // new password pop-up view
  const NewPasswordView = () => {
    if (
      errors?.PasswordReset?.type === 'required' ||
      errors?.PasswordConfirm?.type === 'required'
    ) {
      var validationMsgReset = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field(s) Cannot be Empty!
        </p>
      );
    } else if (errMsgReset !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsgReset = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          {errMsgReset}
        </p>
      );
    }

    return (
      <div className='startHerePanel'>
        <div className='startHereContainer'>
          <div className='loginExitButtonContainer'>
            <img
              src={exitButton}
              alt='exit button'
              loading='lazy'
              className='exitButton'
              onClick={() => setShowNewPassword(false)}
            />
          </div>
          <br />
          <div className='loginTitleContainer'>
            <h1>
              <b>New Password</b>
            </h1>
          </div>
          <br />
          <div className='forgotParagraph'>
            <h5>
              Enter your new password make sure to meet the password
              requirements.
            </h5>
          </div>
          <br />
          <div
            className='loginLabelsContainer'
            style={{ flexDirection: 'column', width: '100%' }}
          >
            <form>
              <div className='loginInputsContainer'>
                <input
                  type='text'
                  placeholder='New Password'
                  {...register('PasswordReset', { required: true, min: 1 })}
                />
                <br />
                <input
                  type='text'
                  placeholder='Confirm Password'
                  {...register('PasswordConfirm', {
                    required: true,
                    min: 1,
                    message: errMsgReset,
                  })}
                />
              </div>
              {validationMsgReset}
              <div
                className='loginButtonsContainers'
                style={{ paddingTop: '2rem' }}
              >
                <button
                  className='yellowButton'
                  type='button'
                  onClick={handleSubmit(resetFormSubmit)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Use the logic from LoginView to create the Sign up form here */}
        </div>
      </div>
    );
  };

  // refresh page
  const refreshPage = () => {
    window.location.reload(false);
  };

  // used when login form gets submitted with Username and Password data
  const loginFormSubmit = async (data) => {
    if (data) {
      await Axios.post('http://localhost:8000/Login/User', {
        username: data.Username,
        password: data.Password,
      })
        .then((res) => {
          if (res.data.auth === true) {
            authenticateUser();
          }
        })
        .catch(function (error) {
          if (error.response) {
            setErrMsg(error.response.data.error);
            // console.log(error.response.data.error);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          }
        });
    }
  };

  // authenticate the token provided when the login form gets submitted
  const authenticateUser = () => {
    Axios.get('http://localhost:8000/Login/User')
      .then((res) => {
        if (res.data.LoggedIn === true) {
          let stringUser = res.data.username;
          redirectUser(stringUser);
        } else if (res.data.message === 'Tokens not present') {
          refreshPage();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login form pop-up view
  const LoginView = (e) => {
    // validation conditional message
    if (
      errors?.Password?.type === 'required' ||
      errors?.Username?.type === 'required'
    ) {
      var validationMsg = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field(s) Cannot be Empty!
        </p>
      );
    } else if (errMsg !== '') {
      // eslint-disable-next-line no-redeclare
      var validationMsg = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>{errMsg}</p>
      );
    }

    return (
      <div className='loginPanel'>
        <div className='loginContainer'>
          <div className='loginFlexContainer'>
            <div className='loginExitButtonContainer'>
              <img
                src={exitButton}
                alt='exit button'
                loading='lazy'
                className='exitButton'
                onClick={() => setShowLogin(false)}
              />
            </div>
            <div className='loginLogoContainer'>
              <img src={logo} alt='logo' className='logoLogin' loading='lazy' />
            </div>
            <br />
            <div className='loginTitleContainer'>
              <h1>
                <b>Welcome</b>
              </h1>
            </div>
            <br />
            <div className='loginLabelsContainer'>
              <form onSubmit={handleSubmit(loginFormSubmit)}>
                <div className='loginInputsContainer'>
                  <input
                    type='text'
                    placeholder='Username'
                    {...register('Username', {
                      required: true,
                      min: 1,
                      pattern:
                        /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/,
                    })}
                  />
                  {errors?.Username?.type === 'pattern' && (
                    <p>Alphabetical characters only</p>
                  )}
                  <br />
                  <input
                    type='password'
                    placeholder='Password'
                    {...register('Password', {
                      required: true,
                      min: 1,
                      message: errMsg,
                    })}
                  />
                  {validationMsg}
                  {/* See more examples at https://react-hook-form.com/ */}
                </div>
                <br />
                <div className='loginButtonsContainers'>
                  <button
                    className='yellowButton loginButtons'
                    onClick={() => setShowStart(true) & setShowLogin(false)}
                  >
                    SIGN UP
                  </button>
                  <button className='yellowButton loginButtons' type='submit'>
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
            <br />
            <div>
              <span
                onClick={() => setShowForgot(true) & setShowLogin(false)}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </div>
          </div>
          <hr />
          <div>
            <button>Google</button>
          </div>
        </div>
      </div>
    );
  };

  // redirect user to their dashboard
  const redirectUser = (user) => {
    if (user !== '') {
      return navigate(`/Dashboard/${user}`);
    }
  };

  // everything starts here
  return (
    <div>
      {showStart ? <StartHereView /> : ''}
      {showLogin ? <LoginView /> : ''}
      {showForgot ? <ForgotPasswordView /> : ''}
      {showEnter ? <EnterCodeView /> : ''}
      {showNewPassword ? <NewPasswordView /> : ''}
      {showSignUp2 ? <SignUp2View /> : ''}
      {showSignUp3 ? <SignUp3View /> : ''}
      {showSignUp4 ? <SignUp4View /> : ''}
      {showSignUp5 ? <SignUp5View /> : ''}

      <nav>
        <Link to={`/`}>
          <img src={logo} alt='logo' className='logoHome' loading='lazy' />
        </Link>
        <div className='navButtons'>
          <Link to={`/About`} style={{ textDecoration: 'none' }}>
            <button className='yellowButton'>About</button>
          </Link>
          <div className='navButtonRight'>
            <button
              onClick={() => setShowLogin(true)}
              className='yellowButton navButtonRight'
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className='startHereButtonPlacement'>
        <button className='yellowButton' onClick={() => setShowStart(true)}>
          {' '}
          Start Here{' '}
        </button>
      </div>

      <img
        src={homeBackground}
        className='homeBackground'
        alt=''
        loading='lazy'
      />
    </div>
  );
}

export default Home;
