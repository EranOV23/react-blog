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
      let postQuery = userInput.replace(' ','_');
      this.setState({
        redirect: true,
        postQuery: postQuery,
      })

    }

    render() {

      if(this.state.redirect)
        return <Redirect to={`/posts?search=${this.state.postQuery}`}/>;

      else
        return(
          <div className="well">
            <h4>Search</h4>
            <from>
              <div className="input-group">
                <input type="search" name="search" ref={ (e) => this.value = e}/>
                <span className="input-group-btn">
                <button className="btn btn-default" type="submit" onClick={ () => this.redirect(this.value.value) }>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
