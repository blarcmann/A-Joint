import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';




const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h4>Your Order</h4>
            <span>Bread at its best..Nice custome for the bread</span>
            <ul> {ingredientSummary} </ul>
            <span>Checkout: <strong>N{props.checkoutPrice.toFixed(2)}</strong></span>
            <p> :) Continue to checkout? :)</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;