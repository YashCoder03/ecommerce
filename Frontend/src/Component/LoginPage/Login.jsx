import  { useEffect, useState } from 'react'
import '../LoginPage/Login.css'
import loginimg from '../../assets/loginimg.jpg'
import google from '../../assets/Google.png'
import axios from 'axios';
import * as Yup from 'yup';
import {  useFormik } from 'formik';


function Login() {
  const validationSchema = Yup.object({
    email : Yup.string()
    .email('Invalid Email Address')
    .required('Email is Required'),
    password : Yup.string()
    .required("Password is Required")
    .min(6, 'Password must be at least 6 characters')
    .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Password must contain an uppercase letter and a number')
  });

  const formik = useFormik({
    initialValues: {
      email : "",
      password : "", 
    },
    validationSchema,
    validateOnChange : false,
    validateOnBlur : true,
    onSubmit: (values) =>{
      setEmail(values.email);
      setPassword(values.password);
      setButtonClicked(true);
    }
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClick,setButtonClicked] = useState(false);
  
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const responce  = await axios.post  ('http://localhost:8080/api/v1/user/login',{email,password});
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    }
    if(buttonClick){
      fetchData();
    }
    setButtonClicked(false);
  },[buttonClick]);
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="loginpage">
      <div className="form">
        <div className="content">
          <span className='welcometxt'>Welcome Back</span>
          <span className='text'><br/>Today is a new day. It&apos;s your day. You shape it. <br/>Sign in to start managing your projects.</span>
          <div className="usernametext">Email</div>
          <div className="usernameinput" ><input
            name='email'
            onChange={formik.handleChange}
            value = {formik.values.email}></input>
            <span>{formik.errors.email}</span></div>
          <div className="passwordtext">Password</div>
          <div className="passwordinput" >
            <input
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}></input>
              <span>{formik.errors.password}</span></div>
          <span className='forgot'>forgot password?</span>
          <button className='signin' type='submit'>Sign in</button>

          <button className='googlebtn' ><img
              src={google}
              alt="Google Logo"
              style={{ width: '20px', marginRight: '10px',marginTop : "2px" }}
            /><span>Sign in with google</span></button>
          <div className='signup'>Don&apos;t have an account? <span>Sign up</span></div>
        </div>
      </div>
      <div className="img">
        <img src={loginimg}></img>
      </div>
      
    </div>
    </form>

  )
}

export default Login