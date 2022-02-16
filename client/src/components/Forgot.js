import React from 'react';
import { useForm } from 'react-hook-form';

// Set up forgot password page that takes in an email input after clicking 
// a "continue" button. For now, only do the label and button.
// TODO: 
/*
    1. Create label for email
    2. add continue button under email label 
    3. add a small description thats says "please type in your password"
    4. (optional) validate input for email
*/ 

function Forgot(){

  const {register, handleSubmit, watch, formState: { errors }} = useForm();

  const onSubmitEmail = (data) => {
    if (data){
      //make api call here
      console.log(data);
    }
  }

  //console.log(watch("Email")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitEmail)}>
        <input type="email" placeholder="Email" {...register("Email", {required: true, min: 1, pattern: /^\S+@\S+$/i})} />
        {errors?.Email?.type === "required" && <p>Field cannot be empty</p>}
        <button className='fogotButton' type="submit">CONTINUE</button>
      </form>
    </div>
  )
}
  export default Forgot;