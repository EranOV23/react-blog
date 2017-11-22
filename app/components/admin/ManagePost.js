import React from 'react';
import PostsService from '../../services/postsService';
import PostForm from './PostForm';

export default class AddPost extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        title: "",
        author: "",
        date: "",
        img: "",
        tags: [],
        mdPath: "",
        htmlPath: "",
        description: "",
      };

      if(this.props.match.params.post){
        this.getPostToEdit(this.props.match.params.post);
      }

      this.edit = this.edit.bind(this);

    }

    getPostToEdit(postTitle){
      PostsService.getPostToEdit(postTitle)
        .then( (post)=> this.setPost(post) )
    }

    setPost({title, author, date, img, tags, mdPath, htmlPath, description}){
      this.setState({title, author, date, img, tags, mdPath, htmlPath, description})
    }

    edit(e){
      if(e.target.name === "tags"){
        let tags = e.target.value.split(",");
        console.log(tags);
        this.setState({[e.target.name]: tags});

      }
      else{
        let value = e.target.value;
        this.setState({[e.target.name]: value});
      }
    }

    savePost(e, post){
      this.setPost(post)
    }

    render() {
      return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="page-header">Add New Post</h2>
                <PostForm post={this.state}
                          onChange={(e)=>this.edit(e)}
                          onClick={(e, post)=>this.savePost(e, post)}/>
              </div>
            </div>
            <hr/>

          </div>
        )
    }
}
