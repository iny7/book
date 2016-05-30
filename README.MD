这儿是学习redux时写的一个demo，主要使用了react redux react-router

简单介绍一下目录结构

bookServer：用来给前端提供数据的一个简单的服务器
src：
	actions 与constant具体的动作函数

	components 笨组件（仅负责根据props进行渲染）
		--grain(复用性较强的小组件)
		--其他

	constants 常量，和应用本身需要的过滤功能（filter）的中使用的常量的声明
		--组件触发的行为action

	data 在未添加redux以及node数据源时，用到的假数据（登录验证）
	

	containers 容器组件（接受redux传来的数据并根据数据渲染components）

	reducers 为防止根state过大，根据业务逻辑将它进行分割成不同的state块，便于管理

	store 根据reducers创建出一个state树

	routes 路由

	cfg：webpack服务器的配置文件

react-redux中的一次数据流：（以containers/ListPage为例）
	1.在ListPage组件export时（最底部）使用connect方法对组件进行封装，让它监听自己渲时所需要的state，这样就可以在ListPage中使用this.props取到所需的数据
	2.当组件的数据需要发生改变时（如conponentWillMount中需要加载当前服务器中所有书籍），使用dispatch触发action中声明的函数，这些函数会产生一个具体的action对象，其中的type属性为在constant中预先声明的动作类型，其他属性（如data）是本次动作携带的数据，这个对象会被reducers接收到，根据type进行分发，根据数据生成新的state。
	3.因为在第一步中各个组件已经监听了需要的state，一旦这些state发生改变，组件就会拿到新的state后，将根据state重新渲染界面，这就完成了一次数据的流动


使用：

启动 node bookServer/main.js && npm start

编译 npm run --dev=dist 会将所有需要的依赖混淆发布到/dist 下
注：我在react-router中使用的是browserHistory，所以在无服务器情况下直接运行dist/index.html无法正常显示，如

果需要本地运行index.html 请将 src/index.js中的所有的browserHistory改为hashHistory)并重新打包发布