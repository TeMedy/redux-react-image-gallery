import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer.js'
import { Provider } from 'react-redux'

//import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
//import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'
//import 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'
//import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'

import Gallery from './Components/Gallery'
import { whatchForLoadImages } from './sagas.js';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(whatchForLoadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
