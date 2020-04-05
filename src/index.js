import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import counterReducer from './redux/reducers/counterReducer';
import {Provider} from 'react-redux';

const store = createStore(counterReducer);


const app = (
  <Provider store={store}>
      <App/>
  </Provider>
)


ReactDOM.render(app,
  document.getElementById('root')
);

