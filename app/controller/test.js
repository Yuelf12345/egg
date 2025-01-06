const { Controller } = require('egg');

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      data: {
        name: 'hanghang',
        age: 18
      }
    };
  }
}

module.exports = TestController;
