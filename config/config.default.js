/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1736130528479_7654';

  // 正确配置位置 (集群监听配置)
  config.cluster = {
    listen: {
      hostname: '127.0.0.1', // 修改为自定义主机名
      port: 7001, // 修改为自定义端口
      path: '', // 修改为自定义路径
    },
  };

  // 独立保留安全配置 (原 security 配置应保持安全属性)
  config.security = {
    csrf: {
      enable: true, // 真正的 CSRF 防护配置
    },
  };

  // 数据库
  // config.sequelize = {
  //   dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  //   database: 'egg_test',
  //   host: 'localhost',
  //   port: '3306',
  //   username: 'root',
  //   password: 'root',
  // };

  // add your middleware config here
  config.middleware = [];

  // 添加静态资源配置
  config.static = {
    prefix: '/public/',
    dir: 'app/public',
  };


  // 日志打印
  config.logger = {
    dir: './logs/local', // 打印目录重定向
    outputJSON: true, // json格式输出
  };

  // 添加模板配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
