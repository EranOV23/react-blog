import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
    constructor(props){
      super(props);
    }

    renderPosts(post , i){
      return <Post post={post} key={i}/>
    }

    render(){
        return (
          <ul className="posts-list">
            {this.props.posts.map( (post, i) => this.renderPosts(post, i) )}
          </ul>
        )
    }
}
