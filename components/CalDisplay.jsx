import React from 'react';

const CalDisplay = ({total, goal}) => {
  let style = {
    'color': total <= goal ? 'green' : 'red'
  }

  return (
    <p>Today's Calories: <span style={style} className="calValues">{total} / {goal}</span></p>
  );
}

CalDisplay.propTypes = {
  total: React.PropTypes.number.isRequired,
  goal: React.PropTypes.number.isRequired
};

export default CalDisplay;
