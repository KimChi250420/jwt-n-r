import express from "express";
import homeController from "../controller/homeController"
let router = express.Router();
const initWebRoute = (app) => {
   
  router.get("/", homeController.handleHelloWord)
  router.get("/user", homeController.handleUserPage)
  router.post("/user/create-user", homeController.handleCreateNewUser)

  return app.use("/",router)
}
module.exports = initWebRoute