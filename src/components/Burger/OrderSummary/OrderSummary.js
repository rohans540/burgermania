import React from 'react';
import Aux from '../../../hoc/Auxi';
import CustomButton from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey+'Code'}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the heavenly stuffings:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price inc GST: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <CustomButton btnType="Danger" clicked={props.purchaseCancelled}>Cancel</CustomButton>
            <CustomButton btnType="Success" clicked={props.purchaseContinued}>Continue</CustomButton>
        </Aux>
    );
};

export default orderSummary;