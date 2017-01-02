import React from 'react';

const Food = ({name, carbs, fat, protein}) => {
  let totalCalories = (4*carbs) + (4*protein) + (9*fat);

  return (
    <li>
      <p>{name}:</p>
      <p>-----Calories: {totalCalories}kcal   (Fat: {fat}g, Carbohydrates: {carbs}g, Protein: {protein}g)</p>
    </li>
  )
}

Food.propTypes = {
  name: React.PropTypes.string.isRequired,
  carbs: React.PropTypes.number.isRequired,
  fat: React.PropTypes.number.isRequired,
  protein: React.PropTypes.number.isRequired,
};

export default Food;
