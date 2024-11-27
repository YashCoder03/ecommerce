import  { useEffect, useState } from 'react'
import registerImg from '../../assets/registerimg.png'
import styles from '../RegisterPage/Register.module.css'
import axios from 'axios';


function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [password,setPassword] = useState();
  const [buttonClick,setButtonClicked] = useState(false);
  useEffect( () => {
    const fetchData = async() => {
      try{
        const responce =  await axios.post('http://localhost:8080/api/v1/user/register',{name,password,email,mobile});
        console.log(responce);
      }catch(error){
        console.log(error)
      }
    }
    if(buttonClick){
      fetchData();
    }
    setButtonClicked(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buttonClick]);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.image}>
          <img src={registerImg}></img>
        </div>
        <div className={styles.form}>
          <div className={styles.formcomponent}>
            <div className={styles.signupwelcometext}>Happy to onBoard</div>
            <div className={styles.signuptext}>Today is a new day. It&apos;s your day. You shape it.</div>
            <div className={styles.nametext}>Name</div>
            <div className={styles.nameinput}><input onChange={(e) => {setName(e.target.value)}}></input></div>
            <div className={styles.emailtext}>Email</div>
            <div className={styles.emailinput}><input onChange={(e) => {setEmail(e.target.value)}}></input></div>
            <div className={styles.mobiletext}>Mobile no.</div>
            <div className={styles.mobileinput}><input onChange={(e) => {setMobile(e.target.value)}}></input></div>
            <div className={styles.passwordtext}>password</div>
            <div className={styles.passwordinput}><input onChange={(e) => {setPassword(e.target.value)}}></input></div>
            <div className={styles.termscond}><label className='custom-checkbox'><input type='checkbox' id={styles.cc} ></input><span>Agree to Terms and Conditions</span></label></div>
            <div className={styles.createaccount}><button onClick={() => {setButtonClicked(true)}}>Sign In</button></div>
            <div className={styles.alreadyhaveaccount}>Already have an Account?<span>Sign In</span></div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Register