import expect from 'expect';
import * as  actions from '../../actions/actions';

describe('actions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  });

  it('should create an action to add food', () => {
    const name = 'chocolate';
    const fat = 12;
    const carbs = 1;
    const protein = 2;

    const expectedAction = {
      type: 'ADD_FOOD',
      name,
      fat,
      carbs,
      protein
    };

    const returnedAction = actions.addFood(name, fat, carbs, protein);

    expect(expectedAction.type).toEqual(returnedAction.type);
    expect(expectedAction.fat).toEqual(returnedAction.fat);
    expect(expectedAction.carbs).toEqual(returnedAction.carbs);
    expect(expectedAction.protein).toEqual(returnedAction.protein);

    // Test that returned action has an id
    expect(returnedAction).toIncludeKey('id');
  });

  it('should create an action to add the next day', () => {
    const expectedAction = {
      type: 'NEXT_DAY'
    }

    const returnedAction = actions.nextDay();

    expect(expectedAction.type).toEqual(returnedAction.type);

    // Test that returned action has an id
    expect(returnedAction).toIncludeKey('id');
  });

  it('should create an action to set the calorie goal', () => {
    const goal = 2000;

    const expectedAction = {
      type: 'SET_CALORIE_GOAL',
      goal
    }

    const returnedAction = actions.setCalorieGoal(goal);

    expect(expectedAction).toEqual(returnedAction);

    // Test that returned action has no id
    expect(returnedAction).toExcludeKey('id');
  });
});
