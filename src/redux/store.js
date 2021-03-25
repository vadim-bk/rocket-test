import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from "redux-thunk" 

import { appReducer } from '../components/App/reducer';
import { testReducer } from '../components/Test/reducer';

const rootReducers = combineReducers({
  app: appReducer,
  test: testReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
