// app.js
module.exports = app => {
  const logger = app.logger;

  app.beforeStart(async () => {
    logger.info('==app beforeStart==', app.config);
    const { hostname, port, path } = app.config.cluster.listen;
    console.log('==项目启动成功==\n hostname:', hostname, '\n port:', port, '\n path:', path, '\n 访问地址：' + `http://${hostname}:${port}${path}`);
  });

  app.ready(async () => {
    logger.info('==app ready==');
    // 这里可以做一些初始化工作，比如连接数据库等
  });
  app.beforeClose(async () => {
    logger.info('==app beforeClose==');
    // 这里可以做一些清理工作，比如关闭数据库连接等

  });
  app.on('request', ctx => {
    // log receive request
    logger.info('==app request==', ctx);
  });
  app.on('response', ctx => {
    // ctx.starttime is set by frameword
    logger.info('==app response==', ctx);
  });

  app.on('error', (err, ctx) => {
    // report error
    logger.error('==app error==', err, ctx);
  });
};
