class UserServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async addUser(userInfo) {
    try {
      const user = await this.userRepository.addUser(userInfo);

      return user;
    } catch (error) {}
  }
  async getUser(userId) {
    try {
      const user = this.userRepository.getUser(userId);
      return user;
    } catch (error) {}
  }
  async updateUser(userId, updateUserInfo) {
    try {
      const user = this.userRepository.updateUser(userId, updateUserInfo);
      return user;
    } catch (error) {}
  }

  getPing() {
    try {
      const message = this.userRepository.testFun();
    } catch (error) {}
  }
}

module.exports = UserServices;
