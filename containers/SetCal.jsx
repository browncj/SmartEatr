import React from 'react';
import {connect} from 'react-redux';
import {setCalorieGoal} from 'actions';

let setCal = React.createClass({
  handleUpdate: function(e){
    e.preventDefault();

    let attemptedInput = this.refs.calText.value;
    this.refs.calText.value = '';

    // Check if input is a valid number
    let inputIsNumber = attemptedInput.match(/^[0-9]*$/);

    if(attemptedInput === ''){
      return;
    } else if (!inputIsNumber) {
      alert('Please enter a valid number');
      return;
    } else {
      this.props.dispatch(setCalorieGoal(parseInt(attemptedInput, 10)));
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
          <input type="text" ref="calText" placeholder="Enter new calorie goal"/>
          <button className="button">Update calorie goal</button>
        </form>
      </div>
    );
  }
});

export default connect()(setCal);
