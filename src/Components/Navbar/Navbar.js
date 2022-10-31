import React from 'react'
import classes from './Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    const cart = useSelector(state => state.cart.productList);
    
    return (
        <div className={classes.navbar}>
            <div className={classes.logoContainer}>
                <div>
                    <h1>Acciojob</h1>
                </div>
                <div>
                    <ul>
                        <li><NavLink activeClassName={classes.active} to='/home'>Home</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/shop'>Shop</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/about'>About</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/blog'>Blog</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/contact'>Contact</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/pages'>Pages</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className={classes.iconContainer}>
                <a href='#'>
                    <div className={classes.loginContainer}>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: "#23A6F0" }}
                        ></FontAwesomeIcon>
                        Login / Register
                    </div>
                </a>
                <a href='#'>
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ color: "#23A6F0" }}
                    ></FontAwesomeIcon>
                </a>
                <a href='#'>
                    <div className={classes.loginContainer}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "#23A6F0" }}
                        ></FontAwesomeIcon><span>{cart.length}</span>
                    </div>
                </a>
                <a href='#'>
                    <div className={classes.loginContainer}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "#23A6F0" }}
                        ></FontAwesomeIcon><span>0</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar