import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './post.scss';


export default class Post extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="post-item">
        <div className="post-image">
          <img src={this.props.post.img} alt="post-image"/>
        </div>

        <div className="post-content">
          <NavLink to={`/post/${this.props.post.title}`}>
            <h2>{this.props.post.title}</h2>
          </NavLink>
          <p><small className="glyphicon glyphicon-user"></small> By <span className="author">{this.props.post.author}</span></p>
          <p><small className="glyphicon glyphicon-time"></small> Posted on {moment(parseInt(this.props.post.date)).format("DD MMM, YYYY") }</p>
          <p>{this.props.post.description}</p>
          <div className="post-footer">
            <p><strong>Tags: </strong>{this.props.post.tags.map((tag, i) => {return <span className="tag" key={i}> {tag} </span>})}</p>
          </div>
          <NavLink to={`/post/${this.props.post.title}`}>
            <button className="btn btn-primary">Read more</button>
          </NavLink>
        </div>
      </li>
    )
  }
}
