import {GET_POSTS_RESPOND, GET_POSTS_LENGTH, SET_POSTS_LENGTH, SET_POST_PAGE_INFO} from '../constants';
import { combineReducers } from 'redux';


function postsListReducer (state = null, action){

  switch(action.type){
    case GET_POSTS_RESPOND:
      return [...action.response];
  }

  return state
}

function postsLengthReducer (state = null, action){
  switch(action.type){
    case GET_POSTS_LENGTH:
      localStorage.setItem('postsLength', action.length.toString());
      return action.length;

    case SET_POSTS_LENGTH:
      console.log("set from local Storage");
      return action.length;
  }

  return state
}


function postPageReducer (state = null, action){
  console.log(state);
  console.log(action);
  switch(action.type){
    case SET_POST_PAGE_INFO:
      return action.info;
  }

  return state
}


export default combineReducers({
  // Reducers go here
  postsList: postsListReducer,
  allPostsLength: postsLengthReducer,
  postPage: postPageReducer,
});
