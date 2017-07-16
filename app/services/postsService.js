import "isomorphic-fetch";

class PostsService{

  constructor() {
    this.url = "../../data/posts.json";
  }

  getPosts(){
    console.log("requested posts");
    return fetch(this.url).then((response) => {  return (response.json()) })
  }

}

module.exports = new PostsService();
