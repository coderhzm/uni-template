import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES],
	routerErrorEach: ({
		type,
		level,
		...args
	}) => {
		console.log({
			type,
			level,
			...args
		})
		// #ifdef APP-PLUS
		if (type === 3) {
			// 退出应用
			router.$lockStatus = false;
			uni.showModal({
				title: '提示',
				content: '您确定要退出应用吗？',
				success: function(res) {
					if (res.confirm) {
						plus.runtime.quit();
					}
				}
			});
		}
		// #endif
	},
});
// 
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}
