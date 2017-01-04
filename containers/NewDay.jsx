import React from 'react';
import {connect} from 'react-redux';
import {nextDay} from 'actions';

let newDay = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.dispatch(nextDay());
  },
  render: function(){
    return (
      <div>
        <h4>Go to next day</h4>
        <form onSubmit={this.handleClick}>
          <button className="button expanded">New day</button>
        </form>
      </div>
    )
  }
});

export default connect()(newDay);
