import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';

import './filters.scss';


class Filters extends React.Component {

    isLinkActive(filter, search){
      if(typeof filter === "object"){
        if(`${filter[Object.keys(filter)]}-${Object.keys(filter)}` === search.split("=")[1])
          return true;
      }
      else if(filter.toLowerCase()===search.split("=")[1])
        return true;
      else
        return false;
    }

    render() {
        return (
          <div className="fliters">
            <h3>Filters Posts</h3>
            <div className="list-group">
              <NavLink to="/posts/1" className={this.props.match.path==="/posts/:page" ? "list-group-item active": "list-group-item" }>
                Show All Posts<span className="badge">{this.props.allPostsLength}</span>
              </NavLink>
            </div>
            <h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
            <div className="list-group">
              {this.props.categoriesFilters.map( (filter, i ) =>
                <NavLink key={i}
                  activeClassName="active"
                  className="list-group-item"
                  exact to={{
                    pathname: "/posts",
                    search: `?category=${filter.toLowerCase()}`
                  }}
                  isActive={ () => { return this.isLinkActive(filter, this.props.location.search)}}>
                  {filter}
                </NavLink>)}
            </div>
            <h4><small className="glyphicon glyphicon-user"></small> Author</h4>
            <div className="list-group">
              {this.props.authorsFilters.map( (filter, i ) =>
                <NavLink key={i}
                 activeClassName="active"
                 className="list-group-item"
                 exact to={{
                    pathname: "/posts",
                    search: `?authors=${filter.toLowerCase()}`
                 }}
                 isActive={ () => { return this.isLinkActive(filter, this.props.location.search)}}>
                 {filter}
                </NavLink>)}
            </div>
            <h4><small className="glyphicon glyphicon-time"></small> Month</h4>
            {this.props.monthsFilters.map( (filter, i) => {
              return (<div key={i} className="list-group">
                <span className="list-group-item">{Object.keys(filter)}</span>
                <NavLink
                  activeClassName="active"
                  className="list-group-item"
                  exact to={{
                    pathname: "/posts",
                    search: `?month=${filter[Object.keys(filter)]}-${Object.keys(filter)}`
                  }}
                  isActive={ () => { return this.isLinkActive(filter, this.props.location.search)}}>
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
      categoriesFilters: state.posts.filters.Category,
      authorsFilters: state.posts.filters.Author,
      monthsFilters: state.posts.filters.Month,
    }
}

export default withRouter(connect(mapStateToProps, null)(Filters));
