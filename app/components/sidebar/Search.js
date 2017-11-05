import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router';


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

  searchInputChange(postQuery){
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
      <div className="well">
        <h4>Search</h4>
        <div className="input-group">
          <input type="search" name="search" value={this.state.postQuery}
                 onChange={(e)=>this.searchInputChange(e.target.value)}/>
          <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={ () => {
                this.redirect(this.state.postQuery);
              }}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
        </div>
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
