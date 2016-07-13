const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
		new WebpackNotifierPlugin({title: 'Webpack', contentImage: 'webpack.png'}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("css/app.css", {
			allChunks: true
		}),
		new ExtractTextPlugin("css/[name].[extension]", {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts' },
			{ test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']) }
		]
	},
	postcss() {
		return [autoprefixer, precss];
 	}
}
