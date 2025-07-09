const { Service } = require('egg');
const jwt = require('jsonwebtoken');

class UserService extends Service {
  /**
   * 用户登录
   * @param {string} username 
   * @param {string} password 
   * @returns {object} { success, data, msg }
   */
  async login(username, password) {
    // 模拟用户数据
    const mockUser = { username: 'admin', password: '123456', nickname: '管理员', id: 1 };
    if (username === mockUser.username && password === mockUser.password) {
      // 登录成功，生成 JWT token
      const token = jwt.sign(
        { id: mockUser.id, username: mockUser.username, nickname: mockUser.nickname },
        this.config.jwtSecret,
        { expiresIn: '2h' }
      );
      return {
        success: true,
        data: {
          id: mockUser.id,
          username: mockUser.username,
          nickname: mockUser.nickname,
          token,
        },
      };
    }
    // 登录失败
    return {
      success: false,
      msg: '用户名或密码错误',
    };
  }
}

module.exports = UserService; 