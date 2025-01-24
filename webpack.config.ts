
import webpackConfig from '@library/build/webpack.config';
import { BuildEnv } from '@library/build/config/types/config';
import path from 'path';

export default (env: BuildEnv) => {
  return webpackConfig(env, path.resolve(__dirname));
};