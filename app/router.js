/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 定义路由
  router.get('/', controller.index.index);
  router.get('/home', controller.home.index);
  router.get('/test', controller.test.index);
};
