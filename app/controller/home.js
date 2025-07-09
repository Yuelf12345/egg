const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.success({ hello: 'egg' }, '欢迎使用 Egg.js');
  }
}

module.exports = HomeController;
