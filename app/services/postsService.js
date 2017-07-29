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
        .then((response) => { return (response.json()) })
        .then( (data) => data.posts.slice(from, to) )
  }

  getPostsLength(){
    console.log("requested posts Length");
    return fetch(this.url)
      .then((response) => { return (response.json()) })
      .then( response => response.posts.length )
  }

  getPostHtml(title){
    return fetch(`../data/posts/html/${title}.html`)
      .then( response => response.text() )
      .then( response => response );
  }

  getPostInfo(title){
      return fetch(`../data/posts.json`)
      .then( response => response.json() )
      .then( response => response.posts.filter( (post) => post.title === title ) )
      .then( response => response[0])
  }

  searchPosts(query){
    return fetch(this.url)
      .then(response => response.json())
      .then(response => response.posts.filter( (post) => {
        return JSON.stringify(post).toLowerCase().includes(query.toLowerCase())
      }) )
  }

}

export default module.exports = new PostsService();
