import React from 'react';

import './sidebar.scss'


export default class SideBar extends React.Component{
  render(){
    return(
      <div className="sidebar col-md-4">
        <div className="well">
          <h4>Search</h4>
          <from>
            <div className="input-group">
              <input type="search" name="search"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </from>
        </div>
      </div>
    )
  }
}
