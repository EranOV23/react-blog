import React from 'react';
import Post from './post/Post';

import './postsList.scss';

export default class PostsList extends React.Component {

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
