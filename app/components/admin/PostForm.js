import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: props.post.title,
        author: props.post.author,
        date: props.post.date,
        img: props.post.img,
        tags: props.post.tags,
        mdPath: props.post.mdPath,
        htmlPath: props.post.htmlPath,
        description: props.post.description,
      };
    }

    componentWillReceiveProps(nextProps){
        if(this.props.post !== nextProps.post)
          this.setState({
            title: nextProps.post.title,
            author: nextProps.post.author,
            date: nextProps.post.date,
            img: nextProps.post.img,
            tags: nextProps.post.tags,
            mdPath: nextProps.post.mdPath,
            htmlPath: nextProps.post.htmlPath,
            description: nextProps.post.description,
          })
    }

    render() {
        return (
          <form action="/api/posts" method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group required">
                    <label htmlFor="postTitle">Title</label>
                    <input type="text"
                           className="form-control"
                           id="postTitle"
                           name="title"
                           placeholder="Post Title"
                           value={this.state.title}
                           onChange={this.props.onChange}
                           required autoFocus/>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="postAuthor">Author</label>
                    <input type="text"
                           className="form-control"
                           id="postAuthor"
                           name="author"
                           placeholder="Post Author"
                           value={this.state.author}
                           onChange={this.props.onChange}
                           required autoFocus/>
                  </div>
                  <div className="form-group required">
                    <label htmlFor="postDate">Date</label>
                    <input type="text"
                           className="form-control"
                           id="postDate"
                           name="date"
                           placeholder="Post Date"
                           value={this.state.date}
                           onChange={this.props.onChange}
                           required autoFocus/>
                  </div>

                  <div className="form-group required">
                    <label htmlFor="postImage">Image</label>
                    <input type="text"
                           className="form-control"
                           id="postImage"
                           name="img"
                           placeholder="Post Image"
                           value={this.state.img}
                           onChange={this.props.onChange}
                           required autoFocus/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="postTags">Tags</label>
                    <input type="text"
                           className="form-control"
                           id="postTags" name="tags"
                           placeholder="Post Tags"
                           value={this.state.tags.map( tag => tag )}
                           onChange={this.props.onChange}
                           autoFocus/>
                    <p className="help-block">Separate multiple tags with a comma. e.g.<code>Grunt,Tools</code></p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group required">
                    <label htmlFor="postDescription">Description</label>
                    <textarea type="text"
                              className="form-control"
                              rows={10}
                              id="postDescription"
                              name="description"
                              placeholder="Post Description"
                              value={this.state.description}
                              onChange={this.props.onChange}
                              required autoFocus/>
                  </div>
                </div>
              </div>


              <hr/>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group required">
                    <label htmlFor="postMd">Markdown</label>
                    <textarea type="text"
                              className="form-control previewPane"
                              rows={20}
                              id="postMd"
                              name="mdPath"
                              placeholder="Post Markdown"
                              value={this.state.mdPath}
                              onChange={this.props.onChange}
                              required autoFocus/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group required">
                    <label >HTML Preview (read only)</label>
                    <div className="form-control previewPane"
                         value={this.state.htmlPath}
                         onChange={this.props.onChange}
                    ></div>
                  </div>
                </div>
              </div>

              <hr/>

              <button type="submit" className="btn btn-primary" onClick={(e)=>this.props.onClick(e, this.state)}>Save Post</button>

            </form>
        )
    }
}
