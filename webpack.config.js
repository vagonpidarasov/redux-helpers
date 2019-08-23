const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: ['awesome-typescript-loader'],
            },
        ],
    },

    entry: [
        path.resolve(__dirname, './src/index.ts'),
    ],

    resolve: {
        extensions: ['.ts'],
    },

    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'yet-another-redux-helper',
    },

    plugins: [
        new CheckerPlugin(),
    ],
};
