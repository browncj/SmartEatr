import {combineReducers} from 'redux';
import daysReducer from './days';
import calorieGoalReducer from './calorieGoal';

const smartEatrApp = combineReducers({
  daysReducer,
  calorieGoalReducer
});

export default smartEatrApp;
