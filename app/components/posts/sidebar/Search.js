import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router';


class Search extends React.Component {

    constructor(props){
      super(props);
    }

    redirect(postQuery){
      console.log("redirect to " + postQuery);
      <Redirect to={postQuery}/>
    }

    render() {
        return (
          <div className="well">
            <h4>Search</h4>
            <from>
              <div className="input-group">
                <input type="search" name="search" ref={ (e) => this.value = e}/>
                <span className="input-group-btn">
                <button className="btn btn-default" type="submit" onClick={ () => this.redirect(`/posts?${this.value.value}`) }>
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
              </div>
            </from>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      posts: state.posts,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
