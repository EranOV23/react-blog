import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class PostsList extends React.Component {
    constructor(props){
      super(props);
    }


    renderPosts(post , i){
      return <Post post={post} key={i}/>
    }

    render() {
        return (
          <ul className="posts-list">
            {this.props.posts.slice(this.props.sliceStart, this.props.sliceEnd).map( (post, i) => this.renderPosts(post, i) )}
          </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
      posts: state.posts,
    }
}

export default connect(mapStateToProps, null)(PostsList);
