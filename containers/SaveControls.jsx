import React from 'react';
import {connect} from 'react-redux';
import {setDays, setCalorieGoal} from 'actions';

let saveControls = React.createClass({
  reset: function(e){
    e.preventDefault();

    const defaultCalGoal = 2000;
    const defaultDays = [{id: 0, foods:[]}];

    this.props.dispatch(setDays(defaultDays));
    this.props.dispatch(setCalorieGoal(defaultCalGoal));

    alert('Data deleted from local storage');
  },
  render: function(){
    return (
      <div>
        <h4>Manage Data</h4>
          <form onSubmit={this.reset}>
            <button className="button expanded alert">Delete</button>
          </form>
      </div>
    );
  }
});

export default connect((state) => state)(saveControls);
