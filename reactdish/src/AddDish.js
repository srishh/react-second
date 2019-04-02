import React,{Component} from 'react'
import './AddDish.css'

class AddDish extends Component{
  
    constructor(props){
        super(props);
        this.state={
            dish:{}
        }
    }

    handleOnChange=(event)=>{
        
        let newDish={};
        newDish[event.target.name]=event.target.value 
    
     this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

    render(){
        return (
            <div className="add_dish">
             <form className="add_dish_form" onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}> 
        
              <label>Name : </label><br></br>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.name}  name="name"/><br></br>
              <label>Description : </label><br></br>
              <input onChange={this.handleOnChange} type="text" value={this.state.dish.desc}  name="desc"/><br></br>
              <label>Price : </label><br></br>
              <input  onChange={this.handleOnChange} type="text" value={this.state.dish.price} name="price"/> <br></br>
              <label>Status : </label><br></br>
              <input onChange={this.handleOnChange} type="text"  name="status"/><br></br>
              <input className="submit" type="submit"/>

            </form>
            </div>
          )       
    }
}

export default AddDish
