import React from 'react';
import {createStore} from 'redux';
import smartEatrApp from 'reducers';
import ReactDOM from 'react-dom';
import SmartEatr from 'SmartEatr'

let store = createStore(smartEatrApp);

ReactDOM.render(
  <SmartEatr/>,
  document.getElementById('app')
);
