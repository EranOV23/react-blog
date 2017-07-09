import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './nav/NavBar';
import Posts from './posts/Posts';
import Admin from './admin/Admin';


class Root extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={ () => <Redirect to="/posts"/> }/>
        <Route path="/" component={NavBar}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/admin" component={Admin}/>
      </div>
    )
  }
}

export default Root;



