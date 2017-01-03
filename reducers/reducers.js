import {combineReducers} from 'redux';
import days from './days';
import calorieGoal from './calorieGoal';

const smartEatrApp = combineReducers({
  days,
  calorieGoal
});

export default smartEatrApp;
