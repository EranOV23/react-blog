import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import NavBar from './nav/NavBar';
import Admin from './admin/Admin';
import Posts from './posts/Posts';
import {connect} from 'react-redux';
import {getAllPosts} from '../actions/creators';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.props.getAllPosts();

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

function mapDispatchToProps(dispatch) {
  return{
    getAllPosts: () => dispatch(getAllPosts()),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Root));
