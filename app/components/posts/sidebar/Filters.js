import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';


class Filters extends React.Component {

    render() {
        return (
          <div className="well">
            <h3>Filters Posts</h3>
            <div className="list-group">
              <NavLink to="/posts/1" className={this.props.match.path==="/posts/:page" ? "list-group-item active": "list-group-item" }>
                Show All Posts<span className="badge">{this.props.allPostsLength}</span>
              </NavLink>
            </div>
            <h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
            <div className="list-group">
              {this.props.categoriesFillers.map( (filter, i ) =>
                <NavLink key={i}
                  activeClassName="active"
                  className="list-group-item"
                  exact to={{
                    pathname: "/posts",
                    search: `?category=${filter.toLowerCase()}`
                  }}
                  isActive={()=> {
                    if(filter.toLowerCase()===this.props.location.search.split("=")[1])
                      return true;
                    else
                      return false;
                  }}>
                  {filter}
                </NavLink>)}
            </div>
            <h4><small className="glyphicon glyphicon-user"></small> Author</h4>
            <div className="list-group">
              {this.props.authorsFillers.map( (filter, i ) =>
                <NavLink key={i} exact to={{
                  pathname: "/posts",
                  search: `?authors=${filter.toLowerCase()}`
                }} className="list-group-item">
                  {filter}
                </NavLink>)}
            </div>
            <h4><small className="glyphicon glyphicon-time"></small> Month</h4>
            {this.props.monthsFillers.map( (filter, i) => {
              return (<div key={i} className="list-group">
                <span className="list-group-item disabled">{Object.keys(filter)}</span>
                <NavLink exact to={{
                    pathname: "/posts",
                    search: `?${Object.keys(filter)}=${filter[Object.keys(filter)]}`
                  }}
                  className="list-group-item">
                  {filter[Object.keys(filter)]}
                </NavLink>
              </div>)
            })}
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      allPostsLength: state.posts.allPostsLength,
      categoriesFillers: state.posts.fillers.Category,
      authorsFillers: state.posts.fillers.Author,
      monthsFillers: state.posts.fillers.Month,
    }
}


export default withRouter(connect(mapStateToProps, null)(Filters));
