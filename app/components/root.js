import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';

import NavBar from './nav/NavBar';
import Admin from './admin/Admin';
import Posts from './posts/Posts';

class Root extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" render={ () => <Redirect to="/posts/1"/> }/>
        <Route path="/posts/:page" component={Posts}/>
        <Route path="/admin" component={Admin}/>
      </div>
    )
  }
}

export default withRouter(Root)
