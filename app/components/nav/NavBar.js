import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';

import './navbar.scss';

export default class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar">
        <ul className="nav-list">
          <li><NavLink exact to="/">The Blog App</NavLink></li>
          <li className="list-item-search"><Search/></li>
          <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
          <li><NavLink to="/admin" activeClassName="active">Admin</NavLink></li>
        </ul>
      </div>
    )
  }
}
