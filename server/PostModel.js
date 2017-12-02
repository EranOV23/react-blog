let db = require("./db");

let scheme = db.Schema({
  "title": { type: String, required: true },
  "img": { type: String, required: true },
  "author": { type: String, required: true },
  "date": { type: String, required: true, default: Date.now() },
  "tags": { type: Array, required: true },
  "mdPath": { type: String, required: true },
  "htmlPath": String,
  "description": String,
});

let Post = db.model("Post", scheme);

module.exports = Post;
