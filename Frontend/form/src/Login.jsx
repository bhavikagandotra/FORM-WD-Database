import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
const [values , setValues] = useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
})
 const handleChange=(event)=>{
    setValues({...values,[event.target.name]:[event.target.value]})
 }
 const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/form' , {values})
    .then(res =>console.log("registered successfully"))
    .catch(err => console.log(err));
 }
  return (
    <div>
          <form className='box' onSubmit={handleSubmit} >
        <div className='header'>
            <h1> Employee Form</h1>
        </div>
        <div className="details"> 
            <input type='text'placeholder="Enter Your Full Name" name="name" onChange={handleChange} ></input>
        </div>
        <div className="details"> 
            <input type='text'placeholder="Enter Your email" name="email" onChange={handleChange} ></input>
        </div>
        <div className="details"> 
            <input type='password'placeholder="Enter Password" name="password" onChange={handleChange} ></input>
        </div>
        <div className="details"> 
            <input type='tel'placeholder="Enter Your mobile number" name="phone" onChange={handleChange} ></input>
        </div>
        <div className="details"> 
            <input type='text'placeholder="Enter Your address" name="address" onChange={handleChange} ></input>
        </div>
        <div className="button"> 
            <button type='submit'>Save</button>
        </div>


    </form>
    </div>
  )
}

export default Login
