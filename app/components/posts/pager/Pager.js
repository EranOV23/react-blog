import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router';


class Pager extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
          <div className="pager">
            <NavLink to={`/posts/${parseInt(this.props.page) - 1}`}
                     className={this.props.page <=1 ? "disabled" : ""}>
              <small className="glyphicon glyphicon-arrow-left"></small> Newer
            </NavLink>
            <NavLink to={`/posts/${parseInt(this.props.page) + 1}`}
                     className={this.props.page >= Math.ceil(this.props.allPostsLength/3 ) ? "disabled" : ""}>
              Older <next className="glyphicon glyphicon-arrow-right"></next>
            </NavLink>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      allPostsLength: state.posts.allPostsLength,
    }
}

export default withRouter(connect(mapStateToProps, null)(Pager))
