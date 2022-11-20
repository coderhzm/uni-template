const TransformPages = require('uni-read-pages'); // uni-simple-router 路由插件
const {
	webpack
} = new TransformPages();
module.exports = {
	transpileDependencies: ['@dcloudio/uni-ui'],
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: [
							'path', //路由路径, 
							'name', //路由名称,
							'meta', //'路由信息存放'
							'aliasPath', //路由别名h5显示时用的
						]
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
	}
}
