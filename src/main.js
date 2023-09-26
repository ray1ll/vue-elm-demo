
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


import Vue from 'vue'
// import Vue from "vue/dist.vue.esm.js"
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/index'
import {routerMode} from './config/env'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

new Vue({
	router,
	store,
	created() {
		// 在应用程序初始化时导航到加载页面
		this.$router.push('/load');
	
		// 模拟加载过程（可以根据实际需要修改）
		setTimeout(() => {
		  // 加载完成后导航到主页面
		  this.$router.push('/');
		}, 3000); // 假设加载需要3秒
	  },

}).$mount('#app')

