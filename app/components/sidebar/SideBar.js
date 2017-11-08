import React from 'react';
import Filters from './Filters';

import './sidebar.scss'


export default class SideBar extends React.Component{
  render(){
    return(
      <div className="sidebar">
        <Filters/>
      </div>
    )
  }
}
