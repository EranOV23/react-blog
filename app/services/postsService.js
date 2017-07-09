class PostsService{

  constructor() {
    this.url = "https://jsonplaceholder.typicode.com/posts/";
  }

  getPosts(){
    console.log("requested posts");
    fetch(this.url)
      .then( (respond)=> {
        console.log(respond)
        return respond;
      })


  }

}

module.exports = new PostsService();
