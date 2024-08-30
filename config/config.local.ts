import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.static = {
    prefix: '/public/',
    dir: 'app/public',
  };
  return config;
};
