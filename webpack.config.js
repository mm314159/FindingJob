var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
      'babel-polyfill',
      "./src/entry",
      'webpack/hot/dev-server',
      
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    devServer: {
      contentBase: "./src",
      hot: true
    },
    module: {
        loaders: [{
              test: /\.jsx?$/, loader: 'babel',
              include: path.join(__dirname, "src"),
              loader: "babel-loader",
              query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react'],
              }
            },
              {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
              }

        ]
    }
};

module.exports.config;
