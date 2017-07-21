import "isomorphic-fetch";

class PostsService{

  constructor(){
    this.url = "../../data/posts.json";
  }

  getAllPosts(){
    console.log("requested posts");
    return fetch(this.url).then((response) => {  return (response.json()) })
  }

  getPostsRange(from, to){
      return fetch(this.url)
        .then((response) => {  return (response.json()) })
        .then( (data) => data.posts.slice(from, to) )
  }

  getPostsLength(){
    console.log("requested posts Length");
    return fetch(this.url)
      .then((response) => {  return (response.json()) })
      .then( response => response.posts.length )
  }


}

module.exports = new PostsService();
