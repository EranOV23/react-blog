import "isomorphic-fetch";
import moment from 'moment';

class PostsService{

  constructor(){
    // this.url = '../data/posts.json';
    this.url = `/api/posts`;
  }

  getAllPosts(){
    console.log("requested All Posts");
    return fetch(this.url)
      .then(response => response.json())
  }

  getPostsLength(){
    console.log("requested posts Length");
    return this.getAllPosts()
      .then( response => response.posts.length )
  }

  getPostHtml(title){
    return fetch(`../data/posts/html/${title}.html`)
      .then( response => response.text() )
      .then( response => response );
  }

  getPostInfo(title){
    return this.getAllPosts()
      .then( response => response.posts.filter( (post) => post.title === title ) )
      .then( response => response[0])
  }

  getPostToEdit(title){
    return this.getAllPosts()
      .then(response => response.posts.filter( (post) => post.title === title ) )
      .then( response => response[0])
  }

  searchPosts(type, query){
    console.log(`search and filter posts by: ${type} - ${query}`);
    return this.getAllPosts()
      .then(response => response.posts.filter( (post) => {
        if(type === "search")
          return JSON.stringify(post).toLowerCase().includes(query.toLowerCase());
        else if( type === "category")
          return JSON.stringify(post.tags).toLowerCase().includes(query.toLowerCase());
        else if( type === "authors")
          return JSON.stringify(post.author).toLowerCase().includes(query.toLowerCase());
        else if( type === "month"){
          return JSON.stringify(moment(parseInt(post.date)).format("MMMM-YYYY")).includes(query);
        }
      }) )
  }

}

export default module.exports = new PostsService();
