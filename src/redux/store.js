import { createStore, combineReducers, compose } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';

const subreducers = {
    posts: postsReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ),
);

export default store;