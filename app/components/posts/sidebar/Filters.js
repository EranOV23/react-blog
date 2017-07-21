import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class Filters extends React.Component {

    render() {
        return (
          <div className="well">
            <h3>Filters Posts</h3>
            <div className="list-group">
              <NavLink to="/" className="list-group-item active">
                Show All Posts<span className="badge">{this.props.allPostsLength}</span>
              </NavLink>
            </div>
            <h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
            <div className="list-group">
              <NavLink to="/angular" className="list-group-item">AngularJS</NavLink>
              <NavLink to="/grunt" className="list-group-item">Grunt</NavLink>
              <NavLink to="/javascript" className="list-group-item">JavaScript</NavLink>
              <NavLink to="/jquery" className="list-group-item">JQuery</NavLink>
              <NavLink to="/tools" className="list-group-item">Tools</NavLink>
            </div>
            <h4><small className="glyphicon glyphicon-user"></small> Author</h4>
            <div className="list-group">
              <NavLink to="/tools" className="list-group-item">Alex Ilyaev</NavLink>
              <NavLink to="/tools" className="list-group-item">Amit Choukroun</NavLink>
              <NavLink to="/tools" className="list-group-item">Ilan Cohen</NavLink>
            </div>
            <h4><small className="glyphicon glyphicon-time"></small> Month</h4>
            <div className="list-group">
              <span className="list-group-item disabled">2015</span>
              <NavLink to="/tools" className="list-group-item">January</NavLink>
              <span className="list-group-item disabled">2014</span>
              <NavLink to="/tools" className="list-group-item">December</NavLink>
            </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      allPostsLength: state.posts.allPostsLength
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
