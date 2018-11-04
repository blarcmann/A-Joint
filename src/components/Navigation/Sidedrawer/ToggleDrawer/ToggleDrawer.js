import React from 'react'
import classes from './ToggleDrawer.css';

const toggleDrawer = (props) => {
    return (
        <div onClick={props.clicked} className={classes.ToggleDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default toggleDrawer;