import userService from "../service/userService"

const handleHelloWord = (req, res) => {
  return res.render("Home.ejs")
}
const handleUserPage = (req, res) => {
  return res.render("user.ejs")
}
let handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userService.createNewUser(email,password,username)
userService.getUserList()
  return res.send("create a user")
}
module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateNewUser
}