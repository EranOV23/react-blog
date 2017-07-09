import {ADD_POST} from '../constants';


function postsReducer (state = null, action){

  switch(action.type){
    case ADD_POST:
      return [...state, action.post];
  }

  return state
}

export default postsReducer;
