import {GET_POSTS_RESPOND} from '../constants';


function postsReducer (state = null, action){

  switch(action.type){

    case GET_POSTS_RESPOND:
      return [...state, ...action.response.posts];
  }

  return state
}

export default postsReducer;
