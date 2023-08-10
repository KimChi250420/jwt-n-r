import express from "express";
import configViewEngine from "./configs/viewsEngine";
import initWebRoute from "./route/web";
import bodyParser from "body-parser"
require('dotenv').config()
let app = express();
let PORT = process.env.PORT

// setup view engine
configViewEngine(app);
// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// init web route
initWebRoute(app);

app.listen(PORT, ()=>{
  console.log("Nodejs index is running port",PORT)
})