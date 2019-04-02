import React from 'react';
import './Dish.css';

const Dish=(props)=>{
    function handleClick(){
        console.log("This Sandwich is priced at " + props.dish.price + " Ruppees and is currently " + props.dish.status);    
    }

    return(
        <div className="dish-card" onClick={handleClick}>
            <h3>{props.dish.name}</h3>
            <p>{props.dish.desc}</p>
        </div>
    )
}

export default Dish;