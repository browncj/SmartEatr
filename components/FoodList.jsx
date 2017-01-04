import React from 'react';
import Food from 'Food';

const FoodList = ({foods}) => {
  if(foods.length === 0){
    return (
      <li>
        <p>No food added for this day</p>
      </li>
    );
  }

  let style = {
    'listStyle': 'none'
  };

  return (
    <li>
      <ul style={style}>
        {foods.map(food =>
          <Food key={food.id} {...food}/>
        )}
      </ul>
    </li>
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
