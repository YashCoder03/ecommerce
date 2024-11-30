import  { useEffect, useState } from 'react'
import registerImg from '../../assets/Login/login.png'
import styles from '../RegisterPage/Register.module.css'
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';


function Register() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Password must contain an uppercase letter and a number'),
    checkbox : Yup.boolean()
      .oneOf([true],'You must accept the terms and conditions')
      .required('Please tick the checkbox')
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
      checkbox: false,
    },
    validationSchema,
    validateOnChange :false,
    validateOnBlur : true,
    onSubmit: (values) => {
      setName(values.name);
      setEmail(values.email);
      setMobile(values.mobile);
      setPassword(values.password);
      setButtonClicked(true);
    },
  });
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
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.page}>
        <div className={styles.image}>
          <img src={registerImg}></img>
        </div>
        <div className={styles.form}>
          <div className={styles.formcomponent}>
            <div className={styles.signupwelcometext}>Happy to onBoard</div>
            <div className={styles.signuptext}>Today is a new day. It&apos;s your day. You shape it.</div>

            <div className={styles.nametext}>Name</div>
            <div className={styles.nameinput}>
              <input 
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}></input>
                <span>{formik.errors.name}</span></div>

            <div className={styles.emailtext}>Email</div>
            <div className={styles.emailinput}>
              <input 
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}></input>
                <span>{formik.errors.email}</span></div>

            <div className={styles.mobiletext}>Mobile no.</div>
            <div className={styles.mobileinput}>
              <input
                name='mobile'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}></input>
                <span>{formik.errors.mobile}</span></div>

            <div className={styles.passwordtext}>password</div>
            <div className={styles.passwordinput}>
              <input
                name="password"
                onChange={formik.handleChange}
                value = {formik.values.password}></input>
                <span>{formik.errors.password}</span></div>

            <div className={styles.termscond}><label className='custom-checkbox'>
              <input type='checkbox' id={styles.cc}
                name='checkbox'
                onChange={formik.handleChange}
                value={formik.values.checkbox}
                checked={formik.values.checkbox}></input>
                <span>Agree to Terms and Conditions</span></label>
                <span>{formik.errors.checkbox}</span></div>

            <div className={styles.createaccount}><button type='submit'>Sign In</button></div>
            
            <div className={styles.alreadyhaveaccount}>Already have an Account?<span>Sign In</span></div>
          </div>
        </div>
      </div>
    </form>    
  )
}

export default Register