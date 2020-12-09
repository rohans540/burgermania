import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your box of happiness is on the way</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={() => console.log("Cancel is clicked")}>Cancel</Button>
            <Button btnType="Success" clicked={() => console.log("Continue is clicked")}>Continue</Button>
        </div>
    )
};

export default checkoutSummary;