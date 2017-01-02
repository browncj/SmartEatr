let nextFoodId = 10000;
export const addFood = (name, fat, carbs, protein) => {
  return {
    type: 'ADD_FOOD',
    id: nextFoodId++,
    name,
    fat,
    carbs,
    protein
  }
};

let nextDayId = 0;
export const nextDay = () => {
  return {
    type: 'NEXT_DAY',
    id: nextDayId++
  }
};

export const setCalorieGoal = (goal) => {
  return {
    type: 'SET_CALORIE_GOAL',
    goal
  }
};
