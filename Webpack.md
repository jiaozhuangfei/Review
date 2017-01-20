# Webpack

## 初始化package.json文件并安装webpack

```
$ npm init -y

//全局安装
$ npm install webpack -g

//安装到项目目录
$ npm install webpack --save-dev
```
## 使用webpack

###### 命令行/终端直接使用webpack

> Windows下使用命令行，Mac下使用终端（如果出错，命令前加sudo提高权限），以下简称命令行

webpack可以在命令行中使用，命令为：

```
webpack {entry file/入口文件} {destination for bundled file/存放bundle.js的地方}
```
如果进行复杂的操作，则在命令行中操作起来不方便并且容易出错，因此用配置文件来使用webpack比较好

###### 通过配置文件使用webpack

```
module.exports = {
    entry: './app/index.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后文件的存放目录
        filename: 'bundle.js' //打包后输出的文件名
    }
};
```

> __dirname是Node.js中的一个全局变量，它指向当前文件所在的目录

此时在配置文件目录下使用命令行中webpack（非全局安装需要使用node_modules/.bin/webpack）命令即可，然后这条命令会自动参考配置文件里的描述进行打包

###### 更便捷的使用webpack

在package.json文件中配置

```
{
  "name": "reactBlog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack" //此处为配置项，加入执行目录
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "css-loader": "^0.26.1",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.7",
    "webpack": "^1.14.0"
  }
}
```

> package.json中的脚本部分已经默认在命令前添加了node_modules/.bin路径，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。

然后在命令行中执行

```
$ npm start
```

即可

> npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm
start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}

## 参考

[Webpack for React](http://www.pro-react.com/materials/appendixA/)

[入门Webpack，看这篇就够了](http://blog.csdn.net/kun5706947/article/details/52596766)