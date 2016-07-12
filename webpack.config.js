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
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js','.vue']
  },
  // Add minification
  plugins: [
		new WebpackNotifierPlugin({title: 'Webpack', contentImage: 'http://reapp.io/images/webpack.svg'}),
    new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("css/app.css", {
			allChunks: true
		}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
			{ test: /\.vue$/, loaders: [ 'vue', 'ts' ] },
			{ test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
    ]
  },
	vue: {
		loaders: { js: 'ts', style: 'sass' }
	},
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
