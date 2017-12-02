import React from 'react';
import moment from 'moment';
import {NavLink} from 'react-router-dom';

import './postsTable.scss';

export default class PostsTable extends React.Component {
    constructor(props){
      super(props);
    }


    renderPostRow(post, i){
        return (<tr key={i}>
            <th>{i+1}</th>
            <td className="post-img"><img src={post.img ? post.img : "https://image.flaticon.com/icons/svg/135/135754.svg"}/></td>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{moment(parseInt(post.date)).format("DD MMM, YYYY")}</td>
          <td><NavLink to={`admin/edit/${post.title}`}>Edit <i className="glyphicon glyphicon-edit"></i></NavLink></td>
        </tr>)
    }

    render() {
        return (
          <table className="table table-bordered table-hover table-striped postsTable">
            <thead>
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date <span className="pull-right"><i className="glyphicon glyphicon-chevron-down"></i></span></th>
              <th>Manage</th>
            </tr>
            </thead>
            <tbody>
              {this.props.posts.map( (post, i) => this.renderPostRow(post, i) )}
            </tbody>
          </table>
        )
    }
}
