import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import landing from '../../assets/landing.jpg';
import styles from './Landing.module.css';
import { getUserDetails } from '../../util/GetUser';
import Loading from '../../components/Loading';
function Landing() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const userDetails = getUserDetails();
   
    if(userDetails) {
      navigate('/to-do-list');
    }
    setIsLoading(false)
  },[]);

  if(isLoading) {
    return <Loading />
  }
  return (
    <div>
        <Navbar active={"home"}/>
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__text}>
                <h1>Navigate Your Day with <span className="primaryText">TaskEase!</span></h1>
            <div className='btnWrapper'>
            <Link to="/register" className="primaryBtn">Register</Link>
                <Link to="/login" className='secondaryBtn'>Login</Link>
            </div>
            </div>

            <div className={styles.landing__img}>
                <img  className='image' src={landing} alt="landing" />
            </div>
      </div>
    </div>
  )
}

export default Landing