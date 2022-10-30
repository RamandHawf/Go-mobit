const { path } = require('../config/info.config')
''
// const multer  = require('multer')




// var kn = [upload.array('video', 1), upload.array('subtitles', 1)]
// const  upload  = require('../../server.js');
const {
  addUser,

  getUser
} = require("./controller");
const { assignloadpass_data } = require('./service');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  

  ///done done 29
  app.post(path + "/adduser",addUser);
//done


app.get(path + "/getuser",getUser);









};
