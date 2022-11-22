const dbConfig = require("./Config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./../TestAPI/models/tutorial.model")(mongoose);

module.exports = db;



// 5QAyrO05R2QAUOPH