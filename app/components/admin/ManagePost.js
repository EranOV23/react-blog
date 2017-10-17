import React from 'react';
import {connect} from 'react-redux';

class AddPost extends React.Component {
    constructor(){
      super();
      this.state = {
        post: {
          title: "",
        },
      }
    }

    savePost(e, postTitle){
      e.preventDefault();
      console.log(e, postTitle)
    }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="page-header">Add New Post</h2>
                <form action="">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group required">
                        <label htmlFor="postTitle">Title</label>
                        <input type="text" className="form-control" id="postTitle" name="postTitle" placeholder="Post Title" value={this.state.post.title} required autoFocus/>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="postAuthor">Author</label>
                        <input type="text" className="form-control" id="postAuthor" name="postAuthor" placeholder="Post Author" required autoFocus/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="postTags">Tags</label>
                        <input type="text" className="form-control" id="postTags" name="postTags" placeholder="Post Tags" autoFocus/>
                        <p className="help-block">Separate multiple tags with a comma. e.g.<code>Grunt,Tools</code></p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group required">
                        <label htmlFor="postDescription">Description</label>
                        <textarea type="text" className="form-control" rows={10} id="postDescription" name="postDescription" placeholder="Post Description" required autoFocus/>
                      </div>
                    </div>
                  </div>


                  <hr/>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group required">
                        <label htmlFor="postMd">Markdown</label>
                        <textarea type="text" className="form-control previewPane" rows={20} id="postMd" name="postMd" placeholder="Post Markdown" required autoFocus/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group required">
                        <label >HTML Preview (read only)</label>
                        <div className="form-control previewPane"></div>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <button type="submit" className="btn btn-primary" onClick={ (e) => this.savePost(e) }>Save Post</button>


                </form>
              </div>
            </div>
            <hr/>

          </div>
        )
    }
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
