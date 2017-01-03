import expect from 'expect';
import calorieGoalReducer from '../../reducers/calorieGoal';

describe('calorieGoal reducer', ()=>{
  it('should exist', () => {
    expect(calorieGoalReducer).toExist();
  });

  it('should update the calorie goal', ()=>{

    const newGoal = 2500;
    const action = {
      type: 'SET_CALORIE_GOAL',
      goal: newGoal
    };

    // The first variable is the current state
    // The second variable is the action designed to change that state
    const newStateGoal = calorieGoalReducer(0, action);

    expect(newStateGoal).toEqual(action.goal);
  });
});
