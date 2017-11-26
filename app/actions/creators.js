import * as ACTIONS from '../constants/index'
import PostsService from '../services/postsService';


export function getAllPosts( postsService = PostsService ){
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    postsService.getAllPosts()
      .then( response => dispatch({type: ACTIONS.GET_POSTS_RESPOND, response }) )
  }
}

export function getPostsLength( postsService = PostsService ){
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    postsService.getPostsLength()
      .then( length => dispatch({type: ACTIONS.GET_POSTS_LENGTH, length }) )
  }
}

export function setPostsLength(length = 0){
  return {type: ACTIONS.SET_POSTS_LENGTH, length };
}
