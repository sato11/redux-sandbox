import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
