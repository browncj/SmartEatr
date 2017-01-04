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
      this.props.dispatch(addFood(nameInput, parseInt(fatInput),
      parseInt(carbsInput), parseInt(proteinInput)));
    }
  },
  render: function(){
    return (
      <div>
        <h4>Add a new food</h4>
        <form onSubmit={this.handleUpdate}>
          <div className="row">
            <input type="text" ref="name" placeholder="Food name"/>
          </div>
          <div className="row">
            <div className="small-4 columns">
              <input type="number" ref="protein" placeholder="Enter protein (g)"/>
            </div>
            <div className="small-4 columns">
              <input type="number" ref="fat" placeholder="Enter fat (g)"/>
            </div>
            <div className = "small-4 columns">
              <input type="number" ref="carbs" placeholder="Enter carbs (g)"/>
            </div>
          </div>
          <div className="row">
            <button className="button expanded">Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

export default connect()(AddFood);
