const { Controller } = require('egg');

class TestController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
        await ctx.render('index.html', {
            title: '测试页面'
        });
    }
}

module.exports = TestController;
