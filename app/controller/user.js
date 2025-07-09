const { Controller } = require('egg');

class UserController extends Controller {
    /**
    * 获取当前登录用户信息（受保护接口）
    * GET /protected/userinfo
    */
    async userinfo() {
        const { ctx } = this;
        ctx.success(ctx.state.user, '获取用户信息成功');
    }
}

module.exports = UserController;