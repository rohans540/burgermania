import React from 'react';
import Aux from '../../../hoc/Auxi';
import CustomButton from '../../UI/Button/Button';

class OrderSummary extends React.Component {

        componentDidUpdate() {
            console.log("[OrderSummary] will update");
        }

        render () {

            const ingredientSummary = Object.keys(this.props.ingredients)
                .map(igKey => {
                if(this.props.ingredients[igKey] > 0)
                    return <li key={igKey+'Code'}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

            return (
                <Aux>
                    <h3>Your Order</h3>
                    <p>A delicious burger with the heavenly stuffings:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total price inc GST: {this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to Checkout?</p>
                    <CustomButton btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</CustomButton>
                    <CustomButton btnType="Success" clicked={this.props.purchaseContinued}>Continue</CustomButton>
                </Aux>
            );
        }
};

export default OrderSummary;