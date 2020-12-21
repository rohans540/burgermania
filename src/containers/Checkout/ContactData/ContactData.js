import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact details</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="street" placeholder="Adddress 1" />
                    <input type="text" name="postalCode" placeholder="Pincode" />
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;