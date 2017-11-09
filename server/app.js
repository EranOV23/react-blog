let express = require("express");
let bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.urlencoded({extended: true}));

let posts = require("../data/postsList");

app.route("/api/posts")
  .get((req, res) => {
    console.log('Requested node server');
    res.json(posts);
  })
  .post((req,res)=>{
    let newPost = req.body;
    let postsArr = posts.posts;
    req.body.tags = req.body.tags.split(",");
    postsArr.push(req.body);
    console.log(`post: ${req.body.title}`);
    res.writeHead(302, {'Location': '/#/admin'});
    res.end();
  });


app.listen(9090);
