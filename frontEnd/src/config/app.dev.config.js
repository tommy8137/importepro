import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: 'v1.0.0(test)',
  apiDomain: 'https://127.0.0.1:3000/',
  dbsyncIp: 'http://127.0.0.1:3009/',
  costCalculatorDebug: false
};

export default config;
