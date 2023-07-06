import React, { Component } from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

  constructor() {
    super();
  }

  state = {
    label: '',
  };

  /*const addNewItem = (text) =>{
    this.props.addItem(text);
  };
*/
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    })
    console.log(event.target.value);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.label);
  }

  render() {
    return (
      <form className="item-add-form d-flex"
        onSubmit={this.onSubmit}>
        <input type='text' className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done" />
        <button type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onAddItem('Hello World')}>
          Add Item

        </button>
      </form>
    )
  };

};