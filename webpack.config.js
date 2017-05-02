var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    cache: true,
    entry: {
        main:  './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
        // filename: 'bundle.js',
        // path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
            {test: /\.js$/ , loader: 'jsx-loader?harmony'},
            {test: /\.js.*$/, loader: "babel-loader"},
            {test: /\.css$/,loader: "style-loader!css-loader"},
            {test: /\.gif/,loader: 'url-loader?limit=10000&mimetype=image/gif'},
            {test: /\.jpg/,loader: 'url-loader?limit=10000&mimetype=image/jpg'},
            {test: /\.png/,loader: 'url-loader?limit=10000&mimetype=image/png'},
            {test: /\.svg/,loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    plugins: [
        definePlugin
    ]
};