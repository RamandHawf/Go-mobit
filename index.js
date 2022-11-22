const express = require('express')
const path = require('path')
const cors = require('cors')
const configInfo = require('./app/config/info.config')


const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'public')))

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true,limit: '50mb' }));


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  // vistorsLogs(req)
  next();
});


//Routes
require('./app/user-apis/routes')(app);
require('./app/TestAPI/route')(app);





// set port, listen for requests
// const PORT = process.env.PORT || 5006;
app.listen(configInfo.PORT, () => {
  console.log(`Server is running on port ${configInfo.PORT}.`);
});