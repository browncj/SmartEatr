import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import smartEatrApp from 'reducers';
import ReactDOM from 'react-dom';
import SmartEatr from 'SmartEatr';
import {setDays, setCalorieGoal} from 'actions';

let store = createStore(smartEatrApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const state = store.getState();
  console.log('New state', JSON.stringify(state));

  // Update local storage whenever store changes
  const daysString = JSON.stringify(state.days);
  const calGoalString = state.calorieGoal.toString();
  localStorage.setItem('days', daysString);
  localStorage.setItem('calGoal', calGoalString);
});

const initialDays = localStorage.getItem('days');
const initialCalGoal = localStorage.getItem('calGoal');
let days = [];
let calGoal;

try {
  days = JSON.parse(initialDays);
  calGoal = parseInt(initialCalGoal);

  store.dispatch(setDays(days));

  // Check if calGoal is a valid int before dispatching
  if(typeof calGoal === 'number' && calGoal % 1 === 0){
    store.dispatch(setCalorieGoal(calGoal));
  }
} catch (e) {
}

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <SmartEatr/>
  </Provider>,
  document.getElementById('app')
);
