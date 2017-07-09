import * as ACTIONS from '../constants/index'

export function addPost(post){
  return {type: ACTIONS.ADD_POST, post}
}
