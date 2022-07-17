import React from 'react';
import styles from "./homepage.module.css";
import banner from "../assets/background/1.jpg";
import Navbar from './shared/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className={styles.main} style={{height:"800px", marginTop:"42px"}}>
            <Navbar />
            <div className={styles.h1}>
                <h1>Welcome to Our Website</h1>
                <div>
                    <h1>Best Shop Store for Everyone!</h1>
                </div>
                <div className={styles.lorem}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
                    veniam molestias, iste maxime laborum non corrupti possimus autem modi
                    animi.sfdkhsd  akdwes minimum            
                </div>
                <Link to="/products"><button className={styles.button}>Shop now</button></Link>
            </div>
                <img className={styles.image} src={banner} alt="banner"/>
                
        </div>
        
    );
};

export default HomePage;