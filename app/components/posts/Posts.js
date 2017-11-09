import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import SideBar from '../sidebar/SideBar';
import PostsList from './postsList/PostsList';
import Pager from './pager/Pager';

import PostsService from '../../services/postsService';

import {getPostsRange, getPostsLength, setPostsLength} from '../../actions/creators';

import './posts.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.match.params.page,
      sliceStart: props.match.params.page * 3 - 3,
      sliceEnd: props.match.params.page * 3,
      postBySearch: [],
      type: "",
      query: "",
    };

    this.postsLength();
    this.props.getPostsRange(this.state.sliceStart, this.state.sliceEnd);
  }

  componentWillReceiveProps({match, location}){
    if(match.params.page !== this.props.match.params.page){
      this.postsLength();
      this.props.getPostsRange(match.params.page * 3 - 3, match.params.page * 3);
      this.setState({
        page: match.params.page,
        sliceStart: match.params.page * 3 - 3,
        sliceEnd: match.params.page * 3,
      });
    }

    if(location.search){
      let type = location.search.split("=")[0].slice(1);
      let query = location.search.split("=")[1];
      this.setState({
        type: type,
        query: query,
      });
      this.searchPosts(type, query);
    }

  }

  searchPosts(type, query){
    PostsService.searchPosts(type, query)
      .then( (posts) => this.setState({
        postBySearch: posts
      }) );
  }

  postsLength(){
    // if(localStorage.getItem('postsLength'))
    //   this.props.setPostsLength(parseInt(localStorage.getItem('postsLength')));
    // else
      this.props.getPostsLength();
  }

  render(){
    if(this.props.match.params.page)
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

    else if(this.props.location.search){
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
    }

    else return <div></div>;
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
    getPostsRange: () => dispatch(getPostsRange()),
    getPostsLength: () => dispatch(getPostsLength()),
    setPostsLength: (length) => dispatch(setPostsLength(length)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
