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
        <h4>Update calorie goal</h4>
        <form onSubmit={this.handleUpdate}>
          <div className="row">
            <div className="small-4 columns">
              <button className="button expanded">Update</button>
            </div>
            <div className="small-8 columns">
              <input type="number" ref="calText" placeholder="Enter new goal"/>
            </div>

          </div>
        </form>
      </div>
    );
  }
});

export default connect()(setCal);
