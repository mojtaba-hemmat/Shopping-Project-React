import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.navber}>
                    <Link className={styles.homepageLink} to="/homepage">Home Page</Link>
                    <Link className={styles.productLink} to="/products">Products</Link>
                    <Link className={styles.contactusLink} to="/aboutus">About Us</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;