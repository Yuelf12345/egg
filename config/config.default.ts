import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1724737897388_2743";

  // add your egg config in here
  config.middleware = [];

  // 设置应用启动时监听的端口
  // config.cluster = {
  //   listen: {
  //     path: "",
  //     port: 7001,
  //     hostname: "127.0.0.1",
  //   },
  // };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
