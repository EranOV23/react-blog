let express = require("express");
let bodyParser = require('body-parser');

let app = express();
let router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));

let posts = require("../data/postsList");
let Post = require("./PostModel");


router.route("/posts")
  .get((req, res) => {
    console.log('Requested node server');
    Post.find( (err, Post) => {
      if(err){
        console.error(err);
        return res.json(posts);
      }
      res.json(Post);
    });

  })
  .post((req,res)=>{

    let post = new Post(req.body);
    post.save()
      .then( Post => res.json(Post) )
      .catch( err => res.status(500).send(err) );


    let postsArr = posts.posts;
    req.body.tags = req.body.tags.split(",");
    console.log(req.body);
    postsArr.push(req.body);


    console.log(`post: ${req.body.title}`);
    res.writeHead(302, {'Location': '/admin'});
    res.end();
  });

app.use("/api", router);

app.listen(9090);
