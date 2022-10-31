import React from 'react'
import classes from './MainSection.module.css';
import girl from '../../Assets/second_section.png'

const MainSection = () => {
    return (
        <div className={classes.mainSection}>
            <div className={classes.firstMainSection}>
                <div>
                    <h3>SUMMER 2022</h3>
                    <h1>NEW COLLECTION</h1>
                    <p>We know how large objects will act, <br /> but things on a small scale</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className={classes.secondMainSection}>
                <div className={classes.mediumEllipse}></div>
                <div className={classes.largeEllipse}></div>
                <div className={classes.smallEllipse}></div>
                <div className={classes.smallestEllipse}></div>
                <div className={classes.imgContainer}>
                    <img src={girl} alt='Girl' />
                </div>
            </div>
        </div>
    )
}

export default MainSection;