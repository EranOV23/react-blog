import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';

import NavBar from './nav/NavBar';
import Admin from './admin/Admin';
import Posts from './posts/Posts';
import PostPage from './posts/postPage/PostPage';
import ManagePost from './admin/ManagePost';

class Root extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" render={ () => <Redirect to="/posts/1"/> }/>
        <Route path="/posts" component={Posts}/>
        <Route path="/posts/:page" component={Posts}/>
        <Route path="/post/:title" component={PostPage}/>
        <Route exact path="/admin" component={Admin}/>
        <Route path="/admin/new/post" component={ManagePost}/>
        <Route path="/admin/edit/:post" component={ManagePost}/>
      </div>
    )
  }
}

export default withRouter(Root)
