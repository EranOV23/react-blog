import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
  // Reducers go here
  posts: postsReducer,
});

let middlewares = applyMiddleware(thunk);

const initState = {
  posts : {
    postsList : [],
    allPostsLength: 0,
    postPage: {},
  }
};

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(middlewares),
);

export default store;
