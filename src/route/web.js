import express from "express";
let router = express.Router();
const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    return res.send("hi word")
  })

  return app.use("/",router)
}
module.exports = initWebRoute