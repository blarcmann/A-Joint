import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';




class OrderSummary extends Component {

    componentWillUpdate() {
        console.log("OrderSummary will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {this.props.ingredients[ingKey]}
                    </li>
                )
            })
        return (
            <Aux>
                <h4>Your Order</h4>
                <span>Bread at its best..Nice custome for the bread</span>
                <ul> {ingredientSummary} </ul>
                <span>Checkout: <strong>N{this.props.checkoutPrice.toFixed(2)}</strong></span>
                <p> :) Continue to checkout? :)</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;