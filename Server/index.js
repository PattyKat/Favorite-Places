const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./Client/public'))
app.use('/', (req, res, next) => {
  console.log(`Now handling ${req.method} request from ${req.path}`)
})


app.listen(port, ()=> {
  console.log(`server listening at port ${port}`)
})