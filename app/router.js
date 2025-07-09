/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 定义路由
  router.get('/', controller.index.index);
  router.get('/home', controller.home.index);
  router.get('/temp', controller.temp.index);
  router.post('/login', controller.index.login);
  // 受保护路由示例
  router.get('/protected/userinfo', controller.user.userinfo);
};
