import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import smartEatrApp from 'reducers';
import ReactDOM from 'react-dom';
import SmartEatr from 'SmartEatr'

let store = createStore(smartEatrApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', JSON.stringify(state));
})

ReactDOM.render(
  <Provider store={store}>
    <SmartEatr/>
  </Provider>,
  document.getElementById('app')
);
