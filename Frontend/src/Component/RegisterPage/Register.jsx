import React from 'react'
import registerImg from '../../assets/registerimg.png'
import styles from '../RegisterPage/Register.module.css'


function Register() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.image}>
          <img src={registerImg}></img>
        </div>
        <div className={styles.form}>
          <div className={styles.formcomponent}>
            <div className={styles.signupwelcometext}>Happy to onBoard</div>
            <div className={styles.signuptext}>Today is a new day. It's your day. You shape it.</div>
            <div className={styles.nametext}>Name</div>
            <div className={styles.nameinput}><input></input></div>
            <div className={styles.emailtext}>Email</div>
            <div className={styles.emailinput}><input></input></div>
            <div className={styles.mobiletext}>Mobile no.</div>
            <div className={styles.mobileinput}><input></input></div>
            <div className={styles.passwordtext}>password</div>
            <div className={styles.passwordinput}><input></input></div>
            <div className={styles.termscond}><label className='custom-checkbox'><input type='checkbox' id={styles.cc} ></input><span>Agree to Terms and Conditions</span></label></div>
            <div className={styles.createaccount}><button>Sign In</button></div>
            <div className={styles.alreadyhaveaccount}>Already have an Account?<span>Sign In</span></div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Register