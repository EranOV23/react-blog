import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';

import PostsService from '../../../services/postsService';
import SideBar from '../../sidebar/SideBar';

import './postPage.scss';

export default class PostPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        postInfo: {},
        postHtml : "",
      };
    }

    componentDidMount(nextProps){
      if(this.props !== nextProps){
        let title = this.props.match.params.title;
        Promise.all([PostsService.getPostInfo(title), PostsService.getPostHtml(title)])
          .then(([postInfo, postHtml])=> this.onPostPage(postInfo, postHtml))
      }
    }

    onPostPage(postInfo, postHtml){
      this.setState({
        postInfo: postInfo,
        postHtml: postHtml,
      });
    }

    render(){
          if(this.state.postInfo.tags){
            return (<div className="post-page">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h1>{this.state.postInfo.title}</h1>
                    <hr/>
                    <p><small className="glyphicon glyphicon-user"></small> by {this.state.postInfo.author}</p>
                    <p><small className="glyphicon glyphicon-time"></small> Posted on {moment(parseInt(this.state.postInfo.date)).format("DD MMM, YYYY") } </p>
                    <p><strong>Tags: </strong> {this.state.postInfo.tags.map( (tag, i)=>{ return <span className="tag" key={i}> {tag} </span>} )}</p>
                    <hr/>
                    {renderHTML(this.state.postHtml)}
                  </div>
                </div>
              </div>
            </div>)
          } else {
            return <div></div>
          }
    }
}
