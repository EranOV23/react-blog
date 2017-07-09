const D = new Date();

import React from 'react';
import {connect} from 'react-redux';

import SideBar from './sidebar/SideBar';

import './posts.scss';

class Posts extends React.Component{
  constructor(props){
    super(props);
    this.posts = props.posts
    this.state = {
      slice: {start: 0, end: 3}
    }
  }


  renderPosts(post , i){
    return <li key={i} className="post-item">
            <h2>{post.title}</h2>
            <p> <small className="glyphicon glyphicon-user"></small> By <span className="author">{post.author}</span></p>
            <p> <small className="glyphicon glyphicon-time"></small> Posted on { D.getDay(post.date)}/{ D.getMonth(post.date)}/{ D.getFullYear(post.date)}</p>
            <p>{post.description}</p>
            <div className="post-footer">
              <p> <strong>Tags: </strong>{post.tags.map((tag, i) => {return <span className="tag" key={i}> {tag} </span>})}</p>
              <button className="btn btn-primary">Read more</button>
            </div>
            <hr/>
          </li>
  }

  setSlice(start, end){
    this.setState({
      slice: {
        start: start,
        end: end,
      }
    })
  }

  render(){
    return(
      <div className="container posts">

        <div className="col-md-8">
          <h2>Showing {this.posts.length} posts</h2>
          <hr/>
          <ul className="posts-list">

            {this.posts.slice(this.state.slice.start, this.state.slice.end).map( (post, i) => this.renderPosts(post, i) )}
          </ul>

          <div className="pager">
            <ul>
              <li className="previous">
                <button className="btn-outline"
                        onClick={ ()=>{this.setSlice(this.state.slice.start-3, this.state.slice.end-3)} }
                        disabled={this.state.slice.start<=0}><small className="glyphicon glyphicon-arrow-left"></small> Older </button>
              </li>
              <li className="next">
                <button className="btn-outline"
                        onClick={ ()=>{this.setSlice(this.state.slice.start+3, this.state.slice.end+3)} }
                        disabled={this.state.slice.end>=this.posts.length}> Newer <small className="glyphicon glyphicon-arrow-right"></small>
                </button>
              </li>
            </ul>
          </div>

        </div>

        <SideBar/>

      </div>


    )

  }
}

function mapStateToProps(state) {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Posts)
