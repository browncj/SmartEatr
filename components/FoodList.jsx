import React from 'react';
import Food from 'Food';

const FoodList = ({foods}) => {
  return (
    <ul>
      {foods.map(food =>
        <Food key={food.id} {...food}/>
      )}
    </ul>
  );
};

FoodList.propTypes = {
  foods: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    carbs: React.PropTypes.number.isRequired,
    fat: React.PropTypes.number.isRequired,
    protein: React.PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default FoodList;
