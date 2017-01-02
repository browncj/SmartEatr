import React from 'react';

const CalDisplay = ({total, goal}) => (
  <p>Today's Food: {total} / {goal} kilocalories consumed</p>
)

CalDisplay.propTypes = {
  total: React.PropTypes.number.isRequired,
  goal: React.PropTypes.number.isRequired
};

export default CalDisplay;
