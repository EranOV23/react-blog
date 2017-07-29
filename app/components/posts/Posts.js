import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import SideBar from './sidebar/SideBar';
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
        query: "",
      });
    }

    if(location.search){
      let query = location.search.replace("?search=", "");
      this.setState({query});
      this.searchPosts(query)
    }

  }

  searchPosts(query){
    console.log(query);
    PostsService.searchPosts(query)
      .then( (posts) => this.setState({
        postBySearch: posts
      }) );
  }

  postsLength(){
    if(localStorage.getItem('postsLength'))
      this.props.setPostsLength(parseInt(localStorage.getItem('postsLength')));
    else
      this.props.getPostsLength();
  }

  render(){
    if(this.props.match.params.page)
    return(
      <div className="container posts">
        <div className="col-md-8">
          <h2>Showing {this.props.postsLength} posts</h2>
          <hr/>
          <PostsList posts={this.props.posts}/>
          <Pager page={this.state.page}/>
        </div>

        <SideBar/>

      </div>
    );

    else if(this.props.location.search){
        return (
          <div className="container posts">
              <div className="col-md-8">
                {
                  this.state.postBySearch.length <= 0
                  ? <div>
                      <h2>{`Could not find any posts matching: '${this.state.query}' `}</h2>
                      <hr/>
                    </div>
                  : <div>
                      <h2>{`Showing results matching: '${this.state.query}' `}</h2>
                      <hr/>
                      <PostsList query={this.state.query} posts={this.state.postBySearch}/>
                    </div>
                }
              </div>
              <SideBar/>
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
    getPostsRange: (from, to) => dispatch(getPostsRange(from, to)),
    getPostsLength: () => dispatch(getPostsLength()),
    setPostsLength: (length) => dispatch(setPostsLength(length)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
