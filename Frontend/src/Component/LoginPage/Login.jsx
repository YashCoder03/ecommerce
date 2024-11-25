import React from 'react'
import '../LoginPage/Login.css'
import loginimg from '../../assets/loginimg.jpg'
import google from '../../assets/Google.png'

function Login() {
  return (
    <>
    <div className="loginpage">
      <div className="form">
        <div className="content">
          <span className='welcometxt'>Welcome Back</span>
          <span className='text'><br/>Today is a new day. It's your day. You shape it. <br/>Sign in to start managing your projects.</span>
          <div className="usernametext">Username</div>
          <div className="usernameinput"><input></input></div>
          <div className="passwordtext">Password</div>
          <div className="passwordinput"><input></input></div>
          <span className='forgot'>forgot password?</span>
          <button className='signin'>Sign in</button>

          <button className='googlebtn' ><img
              src={google}
              alt="Google Logo"
              style={{ width: '20px', marginRight: '10px',marginTop : "2px" }}
            /><span>Sign in with google</span></button>
          <div className='signup'>Don't have an account? <span>Sign up</span></div>
        </div>
      </div>
      <div className="img">
        <img src={loginimg}></img>
      </div>
      
    </div>
    </>

  )
}

export default Login