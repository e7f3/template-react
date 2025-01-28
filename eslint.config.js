import eslintLibraryConfig from '@library/build/eslint.config.js';

export default [
    ...eslintLibraryConfig,
    {
        ignores: ["frontend-react-library/**"],
    }
];