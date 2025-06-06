const { Controller } = require('egg');

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    /**
     * 使用 nunjucks 模板引擎渲染 HTML 页面
     * 注意：这里的 ctx.render 方法会根据配置的模板引擎来渲染页面。
     * ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
     */
    await ctx.render('index.html', {
      title: '测试页面',
    });
  }
}

module.exports = TestController;
