import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';

import NavBar from './nav/NavBar';
import Admin from './admin/Admin';
import Posts from './posts/Posts';
import PostPage from './posts/postPage/PostPage';
import ManagePost from './admin/ManagePost';
import ErrorMessage from './error-message/ErrorMessage'

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if(this.state.errorInfo){
      return(
        <ErrorMessage error={this.state.error} errorInfo={this.state.errorInfo}/>
      )
    }

    else return (
      <div>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" render={ () => <Redirect to="/posts"/> }/>
        <Route path="/posts" component={Posts}/>
        <Route path="/post/:title" component={PostPage}/>
        <Route exact path="/admin" component={Admin}/>
        <Route path="/admin/new/post" component={ManagePost}/>
        <Route path="/admin/edit/:post" component={ManagePost}/>
      </div>
    )
  }
}

export default withRouter(Root)
