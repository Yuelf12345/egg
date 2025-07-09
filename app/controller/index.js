const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.success({ hello: 'egg' }, '欢迎使用 Egg.js');
  }

  /**
   * 登录接口
   * POST /login
   * body: { username, password }
   */
  async login() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    // 简单参数校验
    if (!username || !password) {
      return ctx.fail('用户名或密码不能为空');
    }
    const result = await service.user.login(username, password);
    if (result.success) {
      ctx.success(result.data, '登录成功');
    } else {
      ctx.fail(result.msg || '登录失败');
    }
  }
}

module.exports = HomeController;
