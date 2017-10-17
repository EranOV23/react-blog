import React from 'react';
import SideBar from '../sidebar/SideBar';
import PostsTable from './PostsTable';
import postsService from '../../services/postsService';
import {NavLink} from 'react-router-dom';

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
      .then((res)=>this.onPosts(res.posts))
  }

  onPosts(posts){
    this.setState({posts})
  }

  render(){
    return (
      <div className="container posts">
        <div className="col-md-8">
          <h2>Edit posts</h2>
          <hr/>
          <PostsTable posts={this.state.posts}/>
          <NavLink className="btn btn-primary" to="admin/new/post">Add New Post</NavLink>
        </div>
        <SideBar/>
      </div>)
  }
};
