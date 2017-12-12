import React from 'react';
import SideBar from '../sidebar/SideBar';
import PostsTable from './PostsTable';
import postsService from '../../services/postsService';
import {NavLink} from 'react-router-dom';

import './admin.scss';

export default class Admin extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: []
    };
    this.getBlogPosts();
  }

  getBlogPosts(){
    postsService.getAllPosts()
      .then((res)=>this.onPosts(res))
  }

  onPosts(posts){
    this.setState({posts})
  }

  render(){
    return (
      <div className="admin-panel">
        <h2>Edit posts</h2>
          <div className="table">
            <PostsTable posts={this.state.posts}/>
            <NavLink className="btn btn-primary" to="admin/new/post">Add New Post</NavLink>
          </div>
      </div>
      )
  }
};
