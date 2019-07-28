# 基于create-react-app引入router的脚手架搭建 

## 一、背景说明
create-react-app是一个react工程脚手架，可快速构建一个react应用，但是由于create-react-app没有集成router路由跳转功能，只是简单的react框架。因此想要在项目中使用router实现跳转，就要在项目中引入react-router插件，具体操作如下：

## 二、操作步骤

### 1、创建项目
(1)、进入到你想创建项目存放的磁盘文件，比如 `D:\test` 文件，双击进入 `test` 文件后，在空白的地方按住 `shift` 键再用鼠标点击右键，选择在**此处打开命令窗口（w)**,此时会弹出一个命令行窗口。

(2)、我们需要使用create-react-app脚手架创建一个项目，此时在命令行窗口中输入

`create-react-app react-router-demo`

如图所示：

![cdm-create](https://github.com/lijinping2017/react-router-demo/raw/master/docImages/cmd-creact.jpg)

回车后等待项目安装完成，此时项目名称为 `react-router-demo`。

(3)、安装完成后，我们会在 `D:\test` 中看到新增的 `react-router-demo` 文件，文件结构如下：

	├── node_modules                  // 模块安装依赖包
	├── public                        //公共文件，可以不用管
	│   ├── favicon.ico               //图标
	│   ├── index.html                //入口html
	│   ├── manifest.json             //manifest配置文件，指定应用名称、图标等信息
	├── src 						  //编写自己代码的存放文件
	│   ├── App.css                   //app的引用css文件
	│   ├── App.js					  //组件js文件
	│   ├── App.test.js               //测试文件
	│   ├── index.css                 //idnex引用的css文件
	│   └── index.js				  //页面入口文件
	│   ├── logo.svg                  //页面图片
	│   ├── serviceWorker.js          //加速程序运行文件
	├──.gitignore                     //提交到远程代码库时要忽略的文件
	├──package.json                   //用来声明项目的各种模块安装信息，脚本信息等
	├──package-lock.json              //用来锁定模块安装版本的，确保安装的模块版本一致
	├──README.md					  //盛放关于这个项目的说明文件 

### 2、启动项目
此时我们要验证一下项目能否运行成功，则在命令行窗口中输入

`cd react-router-demo`

进入到项目里面，再输入命令

`npm star`

后，在弹出的浏览器 `localhost://3000` 页面下能看到页面展示出来，如下图：
![react](https://github.com/lijinping2017/react-router-demo/raw/master/docImages/react.jpg)

就说明项目能正常运行成功了。

### 3、安装Router插件
(1)、我们要使用 `router` 实现页面跳转，需要安装 `react-router-dom` 插件，在命令行窗口中输入

`npm install react-router-dom --save-dev`

回车。

(2)安装完成后，打开 `package.json` 文件，我们会看到安装的 `react-router-dom` 存放在`devDependencies` 下，如图所示：
![package-json](https://github.com/lijinping2017/react-router-demo/raw/master/docImages/package-json.jpg)

并且在 `node_modules` 文件下也新增的 `react-router-dom` 的模块包，此时项目就可以使用 `router` 插件了。

### 4、使用Router的步骤
(1)、在 `src` 文件夹下创建一个名为 `components` 的文件夹，用来存放项目的组件，在`components` 文件夹下创建三个 `js` 文件，分别为 `Hoem.js`、 `News.js`、 `MyRoter.js` 代码如下：

Home.js

	import React,{Component} from 'react';
	
	class Home extends Component{
		constructor(props) {
			super(props);
		}
	
		render() {
			return(
				<div>
					<h4>这是首页</h4>
				</div>
			)
		}
	}
	
	export default Home;




News.js
	
	import React,{Component} from 'react';
	
	class News extends Component{
		constructor(props) {
			super(props);
		}
	
		render() {
			return(
				<div>
					<h4>这是新闻页面</h4>
				</div>
			)
		}
	}
	
	export default News;




MyRouter.js

	import React,{Component} from 'react';
	
	import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
	import Home from './Home';
	import News from './News';
	
	class MyRouter extends Component{
		constructor(props) {
			super(props);
		}
	
		render() {
			return(
				<Router>
					<div>
						<Link to='/'>首页</Link>
						<Link to='/news'>新闻</Link>
					</div>
					<Route exact path='/' component={Home} />
					<Route path='/news' component={News} />
				</Router>
			)
		}
	}
	
	export default MyRouter;

此时使用有 `router` 的组件已经创建成功了，这时我们需要在App主组件中挂载渲染我们的 `MyRoter` 组件，`App.js` 的代码如下：

	
App.js
	
	import React from 'react';
	import './App.css';
	import MyRouter from "./components/MyRouter";
	
	function App() {
	  return (
	    <div className="App">
	      <MyRouter />
	    </div>
	  );
	}
	
	export default App;


到这里基本使用 `router` 的步骤基本完成了，这时我们需要在浏览器中查看我们编写的代码是否在页面上生效，因为前面已经启动了项目了，这里不需要再次启动项目，直接在浏览器中 `localhost://3000` 中刷新一下页面，此时页面是这样的：
![home](https://github.com/lijinping2017/react-router-demo/raw/master/docImages/home.jpg)

出现这样的页面就说明项目没有错误，达到了我们想要的效果，这时要验证一下点击链接时是否能进行页面跳转，当点击新闻链接的时候，页面内容由**这是首页**变成了**这是新闻页面**，如下图:
![news](https://github.com/lijinping2017/react-router-demo/raw/master/docImages/news.jpg)


点击首页链接，内容就是**这是首页**，好了，此时的页面效果可以说明了我们已经完成了基于create-react-app引入router来实现页面的跳转了。



