const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const version = '1.0';
const config = {
    ...defaultConfig,
    entry: {
        frontend: path.resolve(__dirname, 'src/genbook/frontend.js'),
    },
    output: {
        filename: `[name].${version}.js`,
        path: path.resolve(__dirname, 'assets/js'),
    },
    plugins: [...defaultConfig.plugins],
}

module.exports = config;