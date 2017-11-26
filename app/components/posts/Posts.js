import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import SideBar from '../sidebar/SideBar';
import PostsList from './postsList/PostsList';

import PostsService from '../../services/postsService';

import {getPostsLength, setPostsLength, getAllPosts} from '../../actions/creators';

import './posts.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postBySearch: [],
      type: "",
      query: "",
    };

    this.postsLength();
    this.props.getAllPosts();
  }

  componentWillReceiveProps({match, location}){
    if(location.search){
      let type = location.search.split("=")[0].slice(1);
      let query = location.search.split("=")[1];
      this.setState({
        type: type,
        query: query,
      });
      this.searchPosts(type, query);
    } else {
      this.postsLength();
    }

  }

  searchPosts(type, query){
    PostsService.searchPosts(type, query)
      .then((posts) => this.setState({postBySearch: posts}));
  }

  postsLength(){
      this.props.getPostsLength();
  }

  render(){
    if(this.props.location.search){
        return (
              <div className="overview">
                {
                  this.state.postBySearch.length <= 0
                  ? <div className="title">
                      <h2>{`Could not find any posts matching: ${this.state.query} `}</h2>
                    </div>
                  : <div>
                      <div className="title">
                        <h2>{`Showing results matching: '${this.state.query}' `}</h2>
                      </div>
                      <div className="main">
                        <div className="posts">
                          <PostsList query={this.state.query} posts={this.state.postBySearch}/>
                        </div>
                        <SideBar/>
                      </div>
                    </div>
                }
              </div>
        );
    } else {
      return(
        <div className="overview">
          <div className="title">
            <h2>Showing {this.props.postsLength} posts</h2>
          </div>
          <div className="main">
            <div className="posts">
              <PostsList posts={this.props.posts}/>
            </div>
            <SideBar/>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return{
    posts: state.posts.postsList,
    postsLength: state.posts.allPostsLength,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getAllPosts: () => dispatch(getAllPosts()),
    getPostsLength: () => dispatch(getPostsLength()),
    setPostsLength: (length) => dispatch(setPostsLength(length)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
