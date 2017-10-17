let express = require("express");
// let cors = require('cors');
let app = express();
let posts = require("../data/postsList");

// app.use(cors());
app.route("/api/posts")
  .get((req, res) => {
    // console.log(res.json(posts));
    console.log('Requested')
    res.json(posts);
  });


app.listen(9090);
