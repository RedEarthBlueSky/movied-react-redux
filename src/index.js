import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

injectTapEventPlugin(); // onTouchTap http://stackoverflow.com/a/34015469/988941

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
