const { UserModel } = require("../models");

class UserRepository {
  async addUser(userDetails) {
    try {
      const userInfoWithID = await UserModel.create({
        username: userDetails.username,
        email: userDetails.email,
      });

      return userInfoWithID;
    } catch (error) {
      //TODO
    }
  }
  async updateUser(userId, updatedUserInfo) {
    try {
      const user = await UserModel.findByIdAndUpdate(userId, updatedUserInfo);
      return user;
    } catch (error) {
      //TODO
    }
  }
  async getUser(userId) {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      //TODO
    }
  }

  testFun() {
    return {
      message: "Server is up and is Running. Can you catch",
    };
  }
}

module.exports = UserRepository;
