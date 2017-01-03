import {connect} from 'react-redux';
import CalDisplay from 'CalDisplay';

// Given the current state, determine the props we pass into CalDisplay
const mapStateToProps = (state) => {
  let todaysCalories = 0;

  for(let i = 0; i < state.days[0].foods.length; i++){
    const thisFood = state.days[0].foods[i];
    todaysCalories += (thisFood.protein*4) + (thisFood.fat*9) + (thisFood.carbs*4);
  }

  return {
    total: todaysCalories,
    goal: state.calorieGoal
  };
};

const GenerateCalDisplay = connect(mapStateToProps)(CalDisplay);

export default GenerateCalDisplay;
