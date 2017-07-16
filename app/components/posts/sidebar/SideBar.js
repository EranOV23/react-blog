import React from 'react';
import Search from './Search';

import './sidebar.scss'


export default class SideBar extends React.Component{
  render(){
    return(
      <div className="sidebar col-md-4">

        <Search/>

      </div>
    )
  }
}
