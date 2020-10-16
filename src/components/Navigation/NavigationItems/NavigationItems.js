import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Make a burger</NavigationItem>
        <NavigationItem link="/">Compliments</NavigationItem>
    </ul>
);

export default navigationItems;