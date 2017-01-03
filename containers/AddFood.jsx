import React from 'react';
import {connect} from 'react-redux';
import {addFood} from 'actions';

let AddFood = React.createClass({
  handleUpdate: function(e){
    e.preventDefault();

    let nameInput = this.refs.name.value;
    let proteinInput = this.refs.protein.value;
    let fatInput = this.refs.fat.value;
    let carbsInput = this.refs.carbs.value;

    this.refs.name.value = '';
    this.refs.protein.value = '';
    this.refs.fat.value = '';
    this.refs.carbs.value = '';

    let validNumberInputs = proteinInput.match(/^[0-9]*$/) &&
    fatInput.match(/^[0-9]*$/) && carbsInput.match(/^[0-9]*$/);

    let allBlanks = nameInput === '' && proteinInput === '' &&
    fatInput === '' && carbsInput === '';

    let noBlanks = nameInput !== '' && proteinInput !== '' &&
    fatInput !== '' && carbsInput !== '';

    if(allBlanks){
      // All input fields are blank
      return;
    } else if (!noBlanks){
      // At least one, but not all input fields are blank
      alert('Please fill in all sections to add food');
    } else if (!validNumberInputs) {
      alert('Please ensure that all macronutrient entries are valid numbers');
    } else {
      this.props.dispatch(addFood(nameInput, fatInput, carbsInput, proteinInput));
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
          <input type="text" ref="name" placeholder="Enter food name"/>
          <input type="text" ref="protein" placeholder="Enter protein (g)"/>
          <input type="text" ref="fat" placeholder="Enter fat (g)"/>
          <input type="text" ref="carbs" placeholder="Enter carbs (g)"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddFood);
