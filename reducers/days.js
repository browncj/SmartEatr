// The reducer for our array of days
const daysReducer = (state = [{id: 0, foods:[]}], action) => {
  switch(action.type){
    case 'NEXT_DAY':
      return [
        {
          id: action.id,
          foods: []
        },
        ...state
      ];
    case 'ADD_FOOD':
      let newDays = JSON.parse(JSON.stringify(state));
      const newFoodEntry = {
        id: action.id,
        name: action.name,
        carbs: action.carbs,
        protein: action.protein,
        fat: action.fat
      }

      newDays[0].foods.unshift(newFoodEntry);

      return newDays;
    case 'SET_DAYS':
      return action.days ? action.days : [{id: 0, foods:[]}];
    default:
      return state;
  }
}

export default daysReducer;
