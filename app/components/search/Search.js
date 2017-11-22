import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router';

import './search.scss';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      postQuery: "",
    }
  }

  redirect(userInput){
    // let postQuery = userInput.replace(' ','_');
    this.setState({
      redirect: true,
      postQuery: userInput,
    })
  }

  searchInputChange(postQuery, keyCode){
    console.log(keyCode);
    this.setState({postQuery})
  }

  render() {
    if(this.state.redirect){
      return <div>
        <Search/>
        <Redirect to={{
          pathname: '/posts',
          search: `?search=${this.state.postQuery}`,
        }}/>
      </div>
    }
    return(
      <div className="search">
        <input type="search" name="search" value={this.state.postQuery} placeholder="search"
                onChange={(e)=>this.searchInputChange(e.target.value, e.keyCode)}/>
        <span className="input-group-btn">
            <button className="btn" type="button" onClick={()=>this.redirect(this.state.postQuery)}>
              <span className="glyphicon glyphicon-search"></span>
            </button>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

export default withRouter(connect(mapStateToProps, null)(Search));
