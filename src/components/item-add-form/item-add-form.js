import React, {Component} from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

  constructor(){
    super();
  }

  /*const addNewItem = (text) =>{
    this.props.addItem(text);
  };
*/
  render() {
    return (
      <div className="item-add-form">
        <button type="button" 
        className="btn btn-outline-secondary"
        onClick={()=> this.props.onAddItem('Hello World')}>
          Add Item
         
        </button>
      </div>
    )
  };

};