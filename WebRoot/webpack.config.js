let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let extractLESS = new ExtractTextPlugin({ filename: '[name]', allChunks: true });
let copyConfig = new CopyWebpackPlugin([
    { from: './node_modules/react/dist/react.min.js', to: 'vendors/js/react.min.js' },
    { from: './node_modules/react-dom/dist/react-dom.min.js', to: 'vendors/js/react-dom.min.js' },
    { from: './node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'vendors/js/bootstrap.min.js' },
    { from: './node_modules/lodash/lodash.min.js', to: 'vendors/js/lodash.min.js' },
    { from: './node_modules/jquery/dist/jquery.min.js', to: 'vendors/js/jquery.min.js' },
    { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'vendors/css/bootstrap.min.css' },
    //{ from: './node_modules/bootstrap/dist/css/bootstrap-theme.min.css', to: 'vendors/css/bootstrap-theme.min.css' },
    //{ from: './node_modules/bootstrap/dist/fonts', to: 'vendors/fonts' },
]);

const config = {
    entry: {
        'app.js': './app.jsx',
        'app.css': './styles/app.less'
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: extractLESS.extract({
                loader: [{
                    loader: 'css-loader',
                    options: { sourceMap: false }
                },
                {
                    loader: 'less-loader',
                    options: { sourceMap: false }
                }
                ]
            })
        }
        ]
    },
    plugins: [
        extractLESS,
        copyConfig
    ],
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.less'],
        alias: {
            components: path.resolve(__dirname, 'app/components')
        }
    },
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    externals: {
        "lodash": "_",
        "jquery": "$",
        "react": "React",
        "react-dom": "ReactDOM"
    }
};


module.exports = config;