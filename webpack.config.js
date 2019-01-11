const path = require('path');

	const config = {
	  mode: 'development',
	  entry: path.resolve(__dirname, 'src/index.jsx'),
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	  },
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env','react']
	          }
	        }
	      }, {
	        test: /\.scss$/,
	        exclude: /node_modules/,
	        use: ['style-loader','css-loader','sass-loader']
	      }
	    ]
	  },
	  devtool: 'inline-source-map'
	};

	module.exports = config;