import React,{Component} from 'react';
import DishList from './DishList';
import './Menu.css'

const Menu=(props)=>{
    return (
        <div className="Menu">
            <h1>Menu for Sandwiches</h1>
            <DishList/>
        </div>
    )
}

export default Menu;