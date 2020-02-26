let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/app.css')
    ]
};

module.exports = conf;