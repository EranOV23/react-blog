import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SideBar from './sidebar/SideBar';
import PostsList from './postsList/PostsList';
import Pager from './pager/Pager';

import './posts.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliceEnd: props.match.params.page * 3,
      sliceStart: props.match.params.page * 3 - 3,
      page: props.match.params.page,
    }
  }

  componentWillReceiveProps({match}){
      this.setState({
        page: match.params.page,
        sliceEnd: match.params.page * 3,
        sliceStart: match.params.page * 3 - 3,
      })
  }

  render(){
    console.log(`start: ${this.state.sliceStart}, end: ${ this.state.sliceEnd} postsArr:`);
    console.log(this.props.posts);
    return(
      <div className="container posts">

        <div className="col-md-8">
          <h2>Showing {this.props.posts.length} posts</h2>
          <hr/>
          <PostsList sliceStart={this.state.sliceStart} sliceEnd={this.state.sliceEnd} />
          <Pager page={this.state.page}/>
        </div>

        <SideBar/>

      </div>

    )

  }
}

function mapStateToProps(state) {
  return{
    posts: state.posts,
  }
}

export default withRouter(connect(mapStateToProps, null)(Posts));
