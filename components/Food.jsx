import React from 'react';

const Food = ({name, carbs, fat, protein}) => {
  let totalCalories = (4*carbs) + (4*protein) + (9*fat);
  
  return (
    <li>
      <p className="text-center">{name}:</p>
      <p className="text-center">{totalCalories} kcal <span className="macroNutrients">(Fat: {fat}g, Carbohydrates: {carbs}g, Protein: {protein}g)</span></p>
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
