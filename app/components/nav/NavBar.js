import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

export default class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar">
        <ul className="container nav-list">
          <li><NavLink exact to="/">The Blog App</NavLink> |</li>
          <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
          <li><NavLink to="/admin" activeClassName="active">Admin</NavLink></li>
        </ul>
      </div>
    )
  }
}
