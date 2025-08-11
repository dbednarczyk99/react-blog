import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import { thunk } from 'redux-thunk';
import categoriesReducer from './categoriesRedux.js';

const subreducers = {
    posts: postsReducer,
    categories: categoriesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ),
);

export default store;