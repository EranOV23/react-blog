import React from 'react';
import {connect} from 'react-redux';
import renderHTML from 'react-render-html';
import PostsService from '../../../services/postsService';
import SideBar from '../sidebar/SideBar';

import './postPage.scss';

class PostPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        postHtml : "",
      };
    }

    componentWillMount(){
      PostsService.getPostPage(this.props.match.params.title)
        .then((data)=>this.onPostPage(data))
    }

    onPostPage(data){
      this.setState({
        postHtml: data
      });
    }

    render() {
        return (<div className="post-page">
            <div className="col-md-8">
              <h1>{this.props.postInfo.title}</h1>
              {renderHTML(this.state.postHtml)}
            </div>
            <SideBar/>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      postInfo: state.posts.postPage
    }
}



export default connect(mapStateToProps, null)(PostPage)
