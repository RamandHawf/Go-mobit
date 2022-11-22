const { path } = require('../config/info.config')

''
// const multer  = require('multer')




// var kn = [upload.array('video', 1), upload.array('subtitles', 1)]
// const  upload  = require('../../server.js');


const tutorials = require("./Controller")
const { assignloadpass_data } = require('./service');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  




app.post(path + "/for", tutorials.create);

// Retrieve all Tutorials
app.get(path + "/", tutorials.findAll);

// Retrieve all published Tutorials
app.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
app.get(path +"/byid", tutorials.findOne);

// Update a Tutorial with id
app.put("/:id", tutorials.update);

// Delete a Tutorial with id
app.delete("/:id", tutorials.delete);

// Create a new Tutorial
app.delete("/", tutorials.deleteAll);









};
