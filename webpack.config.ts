
import path from 'path';

import { BuildEnv } from '@library/build/config/types/config';
import webpackConfig from '@library/build/webpack.config';

export default (env: BuildEnv) => {
    return webpackConfig(env, path.resolve(__dirname));
};