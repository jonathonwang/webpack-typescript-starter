const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {  
  entry: './src/ts/app.ts',
  output: {
		path: 'dist/',
    filename: 'js/app.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
		new WebpackNotifierPlugin({title: 'Webpack', contentImage: 'http://reapp.io/images/webpack.svg'}),
    new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("css/app.css", {
			allChunks: true
		})
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
			{ test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
    ]
  },

}
