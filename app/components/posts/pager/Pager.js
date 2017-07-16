import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Pager extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
          <div className="pager">
            <NavLink to={`/posts/${parseInt(this.props.page) - 1}`}
                     className={this.props.page <=1 ? "disabled" : ""}>
              <small className="glyphicon glyphicon-arrow-left"></small> Older
            </NavLink>
            <NavLink to={`/posts/${parseInt(this.props.page) + 1}`}
                     className={this.props.page >= Math.ceil(this.props.posts.length/3 ) ? "disabled" : ""}>
              Newer <next className="glyphicon glyphicon-arrow-right"></next>
            </NavLink>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      posts: state.posts,
    }
}

export default connect(mapStateToProps, null)(Pager)
