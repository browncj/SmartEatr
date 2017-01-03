const calorieGoalReducer = (state = 2000, action) => {
  switch(action.type){
    case 'SET_CALORIE_GOAL':
      return action.goal;
    default:
      return state;
  }
};

export default calorieGoalReducer;
