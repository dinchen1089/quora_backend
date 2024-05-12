const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");
const { UserRepository } = require("../repositories");

const userService = new UserService(new UserRepository());

async function addUser(req, res) {
  try {
    const user = await userService.addUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
    return user;
  } catch (error) {}
}
async function getUser(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {}
}
async function updateUser(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userService.updateUser(userId, req.body);
    res.status(200).json(user);
  } catch (error) {}
}

async function checkDBOnlineStatus(req, res) {
  try {
    res.status(200).json(userService.getPing());
  } catch (error) {}
}

module.exports = {
  addUser,
  getUser,
  updateUser,
  checkDBOnlineStatus,
};
