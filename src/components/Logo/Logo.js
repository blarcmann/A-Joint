import React from 'react';
import breadLogo from '../../assets/images/logo.png';
import classes from './Logo.css';


const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={breadLogo} alt="logo" />
        </div>
    );
}

export default logo;