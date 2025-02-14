
import path from 'path';

import { buildWebpackConfig } from '@library/build/config/webpack/buildWebpackConfig';
import { BuildEnv } from '@library/build/config/webpack/types/config';

export default (env: BuildEnv) => {
    return buildWebpackConfig(env, path.resolve(__dirname));
};