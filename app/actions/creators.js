import * as ACTIONS from '../constants/index'
import PostsService from '../services/postsService';


export function getAllPosts(){
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    PostsService.getPosts()
      .then( response => dispatch({type: ACTIONS.GET_POSTS_RESPOND, response }) )
  }
}

