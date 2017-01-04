import React from 'react';
import FoodList from 'FoodList';

const DayList = ({days}) => {
  return (
    <ol>
      {days.map(day=>
        <div>
          <FoodList key={day.id} {...day} />
          <hr/>
        </div>
      )}
    </ol>
  );
};

DayList.propTypes = {
  days: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    foods: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      carbs: React.PropTypes.number.isRequired,
      fat: React.PropTypes.number.isRequired,
      protein: React.PropTypes.number.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired
};

export default DayList;
