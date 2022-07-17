import React from 'react';
import banner from "../assets/background/2.jpg";
import styles from "./aboutus.module.css";
const AboutUs = () => {
    return (
        <div className='container' style={{marginTop:"70px"}}>
            <div className={styles.main}>
                
                <h1>Thank you For your trust </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil
                    illum ipsumasv “Remember the carefree days of childhood, when you didn’t feel guilty about eating mountains of cereal with questionable nutrition?”
                </p>  
            </div>
            <img className={styles.image} src={banner} alt="baner"/>
        </div>
    );
};

export default AboutUs;