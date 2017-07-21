import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import SideBar from './sidebar/SideBar';
import PostsList from './postsList/PostsList';
import Pager from './pager/Pager';

import {getPostsRange, getPostsLength, setPostsLength} from '../../actions/creators';

import './posts.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.match.params.page,
      sliceStart: props.match.params.page * 3 - 3,
      sliceEnd: props.match.params.page * 3,
    };

    this.postsLength();
    this.props.getPostsRange(this.state.sliceStart, this.state.sliceEnd);
  }

  componentWillReceiveProps({match}){
    if(match.params.page !== this.props.match.params.page){
      this.postsLength();
      this.props.getPostsRange(match.params.page * 3 - 3, match.params.page * 3);
      this.setState({
        page: match.params.page,
        sliceStart: match.params.page * 3 - 3,
        sliceEnd: match.params.page * 3,
      });
    }
  }

  postsLength(){
    if(localStorage.getItem('postsLength'))
      this.props.setPostsLength(parseInt(localStorage.getItem('postsLength')));
    else
      this.props.getPostsLength();
  }

  render(){
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
    )

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
