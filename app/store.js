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
    fillers: {
      showAll:  'showAll',
      Category: ['AngularJS', 'Grunt', 'JavaScript', 'JQuery', 'Tools'],
      Author: ['Alex Ilyae', 'Amit Choukroun', 'Ilan Cohen'],
      Month: [{2015: 'January'}, {2014: 'December'}],
    }
  }
};

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(middlewares),
);

export default store;
