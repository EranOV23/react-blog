import {GET_POSTS_RESPOND} from '../constants';
import { combineReducers } from 'redux';
import moment from 'moment';

function showAllReducer (state = null, action){
    return state;
}

function categoriesReducer (state = null, action){
    switch(action.type){
      case GET_POSTS_RESPOND:
            let categoriesList = [];
            action.response.posts.map((post)=>{
                post.tags.map((tag)=>{
                    categoriesList.includes(tag)? null : categoriesList.push(tag)
                })
            });
            return categoriesList;
        }
    return state
}

function authorsReducer (state = null, action){
    switch(action.type){
        case GET_POSTS_RESPOND:
            let authorsList = [];
            action.response.posts.map((post)=>{
                authorsList.includes(post.author) ? null : authorsList.push(post.author)
            });
            return authorsList;
        }
    return state
}

function dateReducer (state = null, action){
    switch(action.type){
        case GET_POSTS_RESPOND:
            let datesList = [];
            action.response.posts.map((post)=>{
                datesList.includes(post.date)? null : datesList.push(post.date)
            });
            let formattedList = [];
            datesList.map((date)=>{
                let year = moment(parseInt(date)).format("YYYY");
                let month = moment(parseInt(date)).format("MMMM");
                let formattedDate = {[year]: month};
              formattedList.push(formattedDate);
            });
            return formattedList;
        }
    return state
}

export default combineReducers({
  // Reducers go here
  showAll:  showAllReducer,
  Category: categoriesReducer,
  Author: authorsReducer,
  Month: dateReducer,
});
