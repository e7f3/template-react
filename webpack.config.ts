
import path from 'path';

import { BuildEnv } from '@library/build/config/webpack/types/config';
import { buildWebpackConfig } from '@library/build/config/webpack/buildWebpackConfig.ts';

export default (env: BuildEnv) => {
    return buildWebpackConfig(env, path.resolve(__dirname));
};