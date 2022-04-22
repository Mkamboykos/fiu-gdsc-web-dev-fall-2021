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
  const [showSignUp6, setShowSignUp6] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [errMsgEmail, setErrMsgEmail] = useState('');
  const [errMsgCode, setErrMsgCode] = useState('');
  const [errMsgReset, setErrMsgReset] = useState('');
  const [errMsgSignUp1, setErrMsgSignUp1] = useState('');
  const [errMsgSignUp2, setErrMsgSignUp2] = useState('');


  const [dataObject, setDataObject] = useState({
    data:{}, 
    peanuts: false, 
    shellfish: false, 
    nuts: false, 
    wheat: false, 
    eggs: false, 
    dairy: false, 
    fish: false,
    soy: false,
    lactoseIntolerant: false,
    vegetarian: false,
    glutenFree: false,
    vegan: false, 
    diabetic: false,
    spicy: false,
    pastry: false,
    vegetables: false,
    citrus: false,
    caffeine: false,
    seafood: false,
    friedfoods: false,
    carbonated: false,
    alcohol: false,
    highsodium: false,
    weightLoss: false,
    maintaingWeight: false,
    massGaining: false,
    fasting: false
  });
  
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
  const [spicy, setSpicy] = useState(false);
  const [pastry, setPastry] = useState(false);
  const [vegetables, setVegetables] = useState(false);
  const [citrus, setCitrus] = useState(false);
  const [caffeine, setCaffeine] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [friedfoods, setFriedfoods] = useState(false);
  const [carbonated, setCarbonated] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [highsodium, setHighSodium] = useState(false);
  const [weightLoss, setWeightLoss] = useState(false);
  const [maintaingWeight, setMaintaingWeight] = useState(false);
  const [massGaining, setMassGaining] = useState(false);
  const [fasting, setFasting] = useState(false);

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
    } else if (errors?.email?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.email?.type === 'pattern') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Enter a Valid Email!
        </p>
      );
    } else if (errors?.username?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.createPassword?.type === 'required') {
      var validationMsgSignUp1 = (
        <p style={{ marginTop: '0.6rem', marginBottom: '-0.6rem' }}>
          Field Cannot be Empty!
        </p>
      );
    } else if (errors?.confirmPassword?.type === 'required') {
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
                  className='SignUpInput'
                  type='text'
                  placeholder='Full Name'
                  {...register('fullName', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                {<br/>}
                <input
                  className='SignUpInput'
                  type='email'
                  placeholder='Email'
                  {...register('email', {
                    required: true,
                    min: 1,
                    pattern: /^\S+@\S+$/i,
                    message: errMsgSignUp1,
                  })}
                />
                {<br/>}
                <input
                  className='SignUpInput'
                  type='text'
                  placeholder='Username'
                  {...register('username', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                {<br/>}
                <input
                  className='SignUpInput'
                  type='password'
                  placeholder='Create Password'
                  {...register('createPassword', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                {<br/>}
                <input
                  className='SignUpInput'
                  type='password'
                  placeholder='Confirm Password'
                  {...register('confirmPassword', {
                    required: true,
                    min: 1,
                    message: errMsgSignUp1,
                  })}
                />
                {<br/>}
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
      setDataObject({data: data})
      console.log(data);
    }

    setShowSignUp3(true);
    setShowSignUp2(false);
  };

  // sign up 2 view
  const SignUp2View = () => {
    // validation conditional message
    if (errors?.gender?.type === 'required') {
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
                <select className='SignUpInput' {...register("gender", { required: true, message: errMsgSignUp2 })}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {<br/>}
                <input
                  className='SignUpInput'
                  type='number'
                  placeholder='Age'
                  {...register('age', {
                    required: true,
                    message: errMsgSignUp2,
                  })}
                />
                {<br/>}
                <select className='SignUpInput' {...register("height", { required: true, message: errMsgSignUp2 })}>
                  <option value="">Height</option>
                  <option value="4'11 ft / 1.50 m">4'11 ft / 1.50 m</option>
                  <option value="5'0 ft / 1.52 m">5'0 ft / 1.52 m</option>
                  <option value="5'1 ft / 1.55 m">5'1 ft / 1.55 m</option>
                  <option value="5'2 ft / 1.57 m">5'2 ft / 1.57 m</option>
                  <option value="5'3 ft / 1.60 m">5'3 ft / 1.60 m</option>
                  <option value="5'4 ft / 1.62 m">5'4 ft / 1.62 m</option>
                  <option value="5'5 ft / 1.65 m">5'5 ft / 1.65 m</option>
                  <option value="5'6 ft / 1.68 m">5'6 ft / 1.68 m</option>
                  <option value="5'7 ft / 1.70 m">5'7 ft / 1.70 m</option>
                  <option value="5'8 ft / 1.73 m">5'8 ft / 1.73 m</option>
                  <option value="5'9 ft / 1.75 m">5'9 ft / 1.75 m</option>
                  <option value="5'10 ft / 1.78 m">5'10 ft / 1.78 m</option>
                  <option value="5'11 ft / 1.80 m">5'11 ft / 1.80 m</option>
                  <option value="6'0 ft / 1.83 m">6'0 ft / 1.83 m</option>
                  <option value="6'1 ft / 1.85 m">6'1 ft / 1.85 m</option>
                  <option value="6'2 ft / 1.88 m">6'2 ft / 1.88 m</option>
                  <option value="6'3 ft / 1.91 m">6'3 ft / 1.91 m</option>
                  <option value="6'4 ft / 1.93 m">6'4 ft / 1.93 m</option>
                </select>
                {<br/>}
                <select className='SignUpInput' {...register("weight", { required: true, message: errMsgSignUp2 })}>
                  <option value="">Weight</option>
                  <option value="90 lb / 40.8 kg">90 lb / 40.8 kg</option>
                  <option value="100 lb / 45.4 kg">100 lb / 45.4 kg</option>
                  <option value="110 lb / 49.9 kg">110 lb / 49.9 kg</option>
                  <option value="120 lb / 54.4 kg">120 lb / 54.4 kg</option>
                  <option value="130 lb / 58.9 kg">130 lb / 58.9 kg</option>
                  <option value="140 lb / 63.5 kg">140 lb / 63.5 kg</option>
                  <option value="150 lb / 68.0 kg">150 lb / 68.0 kg</option>
                  <option value="160 lb / 72.6 kg">160 lb / 72.6 kg</option>
                  <option value="170 lb / 77.1 kg">170 lb / 77.1 kg</option>
                  <option value="180 lb / 81.6 kg">180 lb / 81.6 kg</option>
                  <option value="190 lb / 86.2 kg">190 lb / 86.2 kg</option>
                  <option value="200 lb / 90.7 kg">200 lb / 90.7 kg</option>
                  <option value="210 lb / 95.3 kg">210 lb / 95.3 kg</option>
                  <option value="220 lb / 99.8 kg">220 lb / 99.8 kg</option>
                  <option value="230 lb / 104.3 kg">230 lb / 104.3 kg</option>
                  <option value="240 lb / 108.9 kg">240 lb / 108.9 kg</option>
                  <option value="250 lb / 113.4 kg">250 lb / 113.4 kg</option>
                  <option value="260 lb / 117.9 kg">260 lb / 117.9 kg</option>
                </select>
                {<br/>}
                <select className='SignUpInput' {...register("activityLevel", { required: true, message: errMsgSignUp2 })}>
                  <option value="">Activity Level</option>
                  <option value="stationary">Stationary</option>
                  <option value="moderate">Moderate</option>
                  <option value="active">Active</option>
                </select>
                {<br/>}
                <select className='SignUpInput' {...register("state", { required: true, message: errMsgSignUp2 })}>
                  <option value="">State Level</option>
                  <option value="AL">AL</option>
                  <option value="AK">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MI</option>
                  <option value="MT">MN</option>
                  <option value="NE">MS</option>
                  <option value="NV">NV</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
                {<br/>}
                <input
                  className='SignUpInput'
                  type='text'
                  placeholder='City'
                  {...register('city', {
                    required: true,
                    message: errMsgSignUp2,
                  })}
                />
                {<br/>}

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

    setDataObject({ ...dataObject, 
      peanuts: peanuts, 
      shellfish: shellfish, 
      nuts: nuts, 
      wheat: wheat, 
      eggs: eggs, 
      dairy: dairy, 
      fish: fish,
      soy: soy,
      lactoseIntolerant: lactoseIntolerant,
      vegetarian: vegetarian,
      glutenFree: glutenFree,
      vegan: vegan, 
      diabetic: diabetic,
     });

    console.log(dataObject)


    // pass all the boolean variables to the array of data

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

          <div className='signupFlex' style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
            <div className='signupFlexRow1'>
              <div className='widthstuff'>
                <input
                  type='button'
                  label='Peanuts'
                  value='Peanuts'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${peanuts && '#FCBF49'}` }}
                  onClick={() => setPeanuts((state) => !state)}
                />
                <input
                  type='button'
                  label='Shellfish'
                  value='Shellfish'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${shellfish && '#FCBF49'}` }}
                  onClick={() => setShellfish((state) => !state)}
                />
                <input
                  type='button'
                  label='Nuts'
                  value='Nuts'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${nuts && '#FCBF49'}` }}
                  onClick={() => setNuts((state) => !state)}
                />
                <input
                  type='button'
                  label='Wheat'
                  value='Wheat'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${wheat && '#FCBF49'}` }}
                  onClick={() => setWheat((state) => !state)}
                />
              </div>
              <div className='widthstuff'>
                <input
                  type='button'
                  label='Eggs'
                  value='Eggs'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${eggs && '#FCBF49'}` }}
                  onClick={() => setEggs((state) => !state)}
                />
                <input
                  type='button'
                  label='Dairy'
                  value='Dairy'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${dairy && '#FCBF49'}` }}
                  onClick={() => setDairy((state) => !state)}
                />
                <input
                  type='button'
                  label='Fish'
                  value='Fish'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${fish && '#FCBF49'}` }}
                  onClick={() => setFish((state) => !state)}
                />
                <input
                  type='button'
                  label='Soy'
                  value='Soy'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${soy && '#FCBF49'}` }}
                  onClick={() => setSoy((state) => !state)}
                />
              </div>
            </div>

            <div>
              <input
                type='button'
                label='Lactose Intolerant'
                value='Lactose Intolerant'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${lactoseIntolerant && '#FCBF49'}` }}
                onClick={() => setLactoseIntolerant((state) => !state)}
              />
              <input
                type='button'
                label='Vegetarian'
                value='Vegetarian'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${vegetarian && '#FCBF49'}` }}
                onClick={() => setVegetarian((state) => !state)}
              />
              <input
                type='button'
                label='Gluten Free'
                value='Gluten Free'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${glutenFree && '#FCBF49'}` }}
                onClick={() => setGlutenFree((state) => !state)}
              />
              <input
                type='button'
                label='Vegan'
                value='Vegan'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${vegan && '#FCBF49'}` }}
                onClick={() => setVegan((state) => !state)}
              />
              <input
                type='button'
                label='Diabetic'
                value='Diabetic'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${diabetic && '#FCBF49'}` }}
                onClick={() => setDiabetic((state) => !state)}
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






  const signUp4Submit = () => {

    setDataObject({ ...dataObject, 
      spicy: spicy,
      pastry: pastry,
      vegetables: vegetables,
      citrus: citrus,
      caffeine: caffeine,
      seafood: seafood,
      friedfoods: friedfoods,
      carbonated: carbonated,
      alcohol: alcohol,
      highsodium: highsodium
     });

    console.log(dataObject)


    // pass all the boolean variables to the array of data

    setShowSignUp5(true)
    setShowSignUp4(false)
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
          <h1>
            <b>Sign Up</b>
          </h1>
          <br />
          <h6>
            <i>Any allergies or dietary restrictions?</i>
          </h6>

          <div className='signupFlex'>
            {<br/>}
            <div className='signupFlexRow1'>
              <div className='widthstuff'>
              
                <input
                  type='button'
                  label='Spicy'
                  value='Spicy'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${spicy && '#FCBF49'}` }}
                  onClick={() => setSpicy((state) => !state)}
                />
                <input
                  type='button'
                  label='Pastry'
                  value='Pastry'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${pastry && '#FCBF49'}` }}
                  onClick={() => setPastry((state) => !state)}
                />
                <input
                  type='button'
                  label='Vegetables'
                  value='Vegetables'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${vegetables && '#FCBF49'}` }}
                  onClick={() => setVegetables((state) => !state)}
                />
                <input
                  type='button'
                  label='Citrus'
                  value='Citrus'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${citrus && '#FCBF49'}` }}
                  onClick={() => setCitrus((state) => !state)}
                />
                <input
                  type='button'
                  label='Caffeine'
                  value='Caffeine'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${caffeine && '#FCBF49'}` }}
                  onClick={() => setCaffeine((state) => !state)}
                />
              </div>
              <div className='widthstuff'>
                <input
                  type='button'
                  label='Sea Food'
                  value='Sea Food'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${seafood && '#FCBF49'}` }}
                  onClick={() => setSeafood((state) => !state)}
                />
                <input
                  type='button'
                  label='Fried Foods'
                  value='Fried Foods'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${friedfoods && '#FCBF49'}` }}
                  onClick={() => setFriedfoods((state) => !state)}
                />
                <input
                  type='button'
                  label='Carbonated'
                  value='Carbonated'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${carbonated && '#FCBF49'}` }}
                  onClick={() => setCarbonated((state) => !state)}
                />
                <input
                  type='button'
                  label='Alcohol'
                  value='Alcohol'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${alcohol && '#FCBF49'}` }}
                  onClick={() => setAlcohol((state) => !state)}
                />
                <input
                  type='button'
                  label='High Sodium'
                  value='High Sodium'
                  className='signup3buttonRow signup3button SignUpInput'
                  style={{paddingLeft: 0, backgroundColor: `${highsodium && '#FCBF49'}` }}
                  onClick={() => setHighSodium((state) => !state)}
                />
                
              </div>
            </div>

            {<br/>}
            <button className='yellowButton' onClick={() => signUp4Submit()}>
            Continue
          </button>
          </div>
        </div>
      </div>
    );
  };



  const signUp5Submit = () => {

    setDataObject({ ...dataObject, 
      weightLoss: weightLoss,
      maintaingWeight: maintaingWeight,
      massGaining: massGaining,
      fasting: fasting,
     });


    // pass all the boolean variables to the array of data
    setShowSignUp5(false)
    setShowSignUp6(true)
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
          <h1>
            <b>Sign Up</b>
          </h1>
          <br />
          <h6>
            <i>Any allergies or dietary restrictions?</i>
          </h6>

          <div className='signupFlex'>
            <div>
            {<br/>}
              <input
                type='button'
                label='Weight Loss'
                value='Weight Loss'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${weightLoss && '#FCBF49'}` }}
                onClick={() => setWeightLoss((state) => !state)}
              />
              <input
                type='button'
                label='Maintain Weight'
                value='Maintain Weight'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${maintaingWeight && '#FCBF49'}` }}
                onClick={() => setMaintaingWeight((state) => !state)}
              />
              <input
                type='button'
                label='Mass Gaining'
                value='Mass Gaining'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${massGaining && '#FCBF49'}` }}
                onClick={() => setMassGaining((state) => !state)}
              />
              <input
                type='button'
                label='Fasting'
                value='Fasting'
                className='signup3buttonCol signup3button SignUpInput'
                style={{paddingLeft: 0, backgroundColor: `${fasting && '#FCBF49'}` }}
                onClick={() => setFasting((state) => !state)}
              />
              {<br/>}
            </div>
          </div>

          <button
            className='yellowButton'
            onClick={() => signUp5Submit()}
          >
            Continue
          </button>
        </div>
      </div>
    );
  };


  // Signup 6 view
  const signUp6Submit = async () => {

    {console.log(dataObject)}

     await Axios.post('http://localhost:8000/Register/basicInfo', {
      dataObject: dataObject
    })
      .then((res) => {
        if (res.data === "User Successfully Created") {
          console.log("done")
        }
      })
      .catch(function (error) {
        if (error.response) {
          // setErrMsg(error.response.data.error);
          console.log(error.response.data.error);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
      });


    // pass all the boolean variables to the array of data
    setShowSignUp6(false)
  };


  // sign up 6 view
  const SignUp6View = () => {
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
          <h1>
            <b>Sign Up</b>
          </h1>
          <br />

          <button
            className='yellowButton'
            onClick={() => signUp6Submit()}
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
        username: data.UsernameLogin,
        password: data.PasswordLogin,
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
      errors?.PasswordLogin?.type === 'required' ||
      errors?.UsernameLogin?.type === 'required'
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
                    className='SignUpInput'
                    type='text'
                    placeholder='Username'
                    {...register('UsernameLogin', {
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
                     className='SignUpInput'
                    type='password'
                    placeholder='Password'
                    {...register('PasswordLogin', {
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
                  <button className='yellowButton loginButtons' type='submit' style={{width: "6.5rem"}}>
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
            <br />
            <div>
              <span
                className="forgotPassword"
                onClick={() => setShowForgot(true) & setShowLogin(false)}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </div>
          </div>
          <hr />
          <div className='googleContainer'>
            <button className='googleButton'>Google</button>
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
      {showSignUp6 ? <SignUp6View /> : ''}

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
        <button className='yellowButton' onClick={() => setShowStart(true)} style={{backgroundColor: "#921c06"}}>
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
