var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
     plugins: [
        //new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
        //new HappyPack({ loaders: ['babel-loader?presets[]=es2015']}),
    ],
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
};