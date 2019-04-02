import React, { Component } from "react";
import sandwiches from "./SampleDishes";
import Dish from "./Dish";
import AddDish from "./AddDish";
import './DishList.css'

export class DishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwiches: sandwiches   
    };
  }

handleAddDish=(event,dish)=>{
    event.preventDefault();
    console.log(dish);
      
     let newSandwiches=this.state.sandwiches.slice();
     newSandwiches.push(dish);
     this.setState({
         sandwiches:newSandwiches,
     })
 }

 render() {
    return (
      <div className="dish-list ">
      <div className="dishes">

        {    
           this.state.sandwiches.map((dish,index) => {
          return <Dish dish={dish} key={index} />;
        })}

        </div>

        <h2>Add a Sandwich</h2>
        <AddDish className="addDish" handleOnChange={this.handleOnChange} handleAddDish={this.handleAddDish}/>

      </div>
    );
  }
}

export default DishList;
