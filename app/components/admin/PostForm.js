import React from 'react';
import {connect} from 'react-redux';

class PostForm extends React.Component {

    render() {
        return (<div><h1>This is the PostForm component</h1></div>
        )
    }
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
