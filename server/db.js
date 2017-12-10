var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connection.openUri("mongodb://eranov23:123456@ds135946.mlab.com:35946/react-blog");

module.exports = mongoose;
