import React from 'react';
import moment from 'moment';

export default class Post extends React.Component{
  constructor(props){
    super(props);
    this.post = props.post;
  }

  render(){
    return(
      <li className="post-item">
        <h2>{this.post.title}</h2>
        <p><small className="glyphicon glyphicon-user"></small>By<span className="author">{this.post.author}</span></p>
        <p><small className="glyphicon glyphicon-time"></small>Posted on {moment(parseInt(this.post.date)).format("DD MMM, YYYY") }</p>
        <p>{this.post.description}</p>
        <div className="post-footer">
          <p><strong>Tags: </strong>{this.post.tags.map((tag, i) => {return <span className="tag" key={i}> {tag} </span>})}</p>
          <button className="btn btn-primary">Read more</button>
        </div>
        <hr/>
      </li>
    )
  }
}
