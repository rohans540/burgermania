import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1.5,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = this.state.ingredients + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    };

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <=0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
};

export default BurgerBuilder;