import express from "express";
import configViewEngine from "./configs/viewsEngine";
import initWebRoute from "./route/web";

require('dotenv').config()
let app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);

let PORT = process.env.PORT

app.listen(PORT, ()=>{
  console.log("Nodejs index is running port",PORT)
})