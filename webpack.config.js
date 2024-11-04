const path = require('path');

module.exports = {
    mode: 'development', // Use 'production' for the production build
    entry: {
        background: './src/background.js',
        content: './src/content.js',
        utils: './src/utils.js',
        popup: './src/popup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile all JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map', // Optional: Helps with debugging
};
