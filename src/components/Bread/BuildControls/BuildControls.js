import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' }
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
        <span>Current Price: <strong>N{props.price.toFixed(2)}</strong></span>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() =>props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    />
            ))}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
};

export default buildControls;