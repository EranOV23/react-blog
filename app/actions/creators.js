import * as ACTIONS from '../constants/index'
import PostsService from '../services/postsService';


export function getAllPosts(){
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    PostsService.getAllPosts()
      .then( response => dispatch({type: ACTIONS.GET_POSTS_RESPOND, response }) )
  }
}

export function getPostsRange(from, to) {
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    PostsService.getPostsRange(from, to)
      .then( response => dispatch({type: ACTIONS.GET_POSTS_RESPOND, response }) )
  }
}

export function getPostsLength(){
  return dispatch => {
    dispatch({type: ACTIONS.GET_POSTS_REQUEST});

    PostsService.getPostsLength()
      .then( length => dispatch({type: ACTIONS.GET_POSTS_LENGTH, length }) )
  }
}

export function setPostsLength(length){
  return {type: ACTIONS.SET_POSTS_LENGTH, length };
}

export function setPostPageInfo(info){
  return {type: ACTIONS.SET_POST_PAGE_INFO, info };
}
