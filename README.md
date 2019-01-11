### Webpack从零开始新建一个React项目

只需要配置`babel`和`scss`来处理`ES6`和`SCSS`

第一步：安装相关依赖

	npm init (-y)  // 得到package.json
	npm install webpack webpack-cli -D // 安装webpack相关
	npm install babel-core babel-loader@7 babel-preset-env -D // 安装babel相关 
	npm install -g node-sass //前提
	npm install -D sass-loader css-loader style-loader
	npm install -D node-sass //安装css相关

第二步：新建并编辑配置文件`webpack.config.js`

	const path = require('path');

	const config = {
	  mode: 'development',
	  entry: path.resolve(__dirname, 'src/index.js'),
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	  },
	  module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env']
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

第三步：从上面配置的入口文件写代码

第四步：在`package.json`里面新增命令`webpack -w`

第五步：新建一个入口的html文件，引用output生成的文件

上面五步是新建一个普通项目的步骤，可以参考[https://github.com/beat-the-buzzer/webpackBase](https://github.com/beat-the-buzzer/webpackBase)，接下来讲的都是在上面的基础上进行下去。

第六步：安装React相关依赖

	npm install react react-dom -S // react相关
	npm install babel-preset-react -D // 编译jsx

第七步：添加编译jsx文件的配置，主要改动的是下面注释的几个地方

	const path = require('path');

	const config = {
	  mode: 'development',
	  entry: path.resolve(__dirname, 'src/index.jsx'), // 入口的一点点修改
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	  },
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/, // 添加编译jsx的后缀
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env','react'] // 配置编译react
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

第八步：编辑`index.jsx`

	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	import './Style.scss';

	class App extends Component {
		render() {
			return <div>Hello World!</div>
		}
	}

	ReactDOM.render(
			<App />,
		document.querySelector('#root')
	);

第九步：编辑`index.html`

在`index.html`里引入生成的`main.js`，然后添加:

	<div id="root"></div>

