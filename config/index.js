
// requires

const dotenv = require('dotenv').config();
const _ = require('lodash');

// module variables
const config = require('./config');
const dbConfig = require('./database');
const defaultConfig = config.development;
const defaultDbConfig = dbConfig.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const environmentDbConfig = dbConfig[environment];
const finalConfig = {
  [environment]: true,
  env: environment,
  config: _.merge(defaultConfig, environmentConfig),
  db: _.merge(defaultDbConfig, environmentDbConfig)
};


global.gConfig = finalConfig;

module.exports = finalConfig;
// log global.gConfig
// console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);