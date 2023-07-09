const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
let corsOptions = {
  origin: "*",
  Credential: true,
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'src/build')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'src/build/index.html'));
})

module.exports = app