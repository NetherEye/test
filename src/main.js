// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue';
import '@/assets/css/public.css'



Vue.use(ElementUI);
Vue.config.productionTip = false

//拦截，没有登录的时候  退回登录页
router.beforeEach((to, from, next) => {
	next()
	return;
	let toName = to.name
	let token = localStorage.getItem('token');
	
	if(toName == '登录'){ // 跳转登录不做任何限制，clear all sessionStorage
		// 如果存在token，把token发给后台校验是否登录，成功则进入系统，失败清除token
		if(token){
			
		}
		
		next();
		return
	}
	
	if(!token){ // token 不存在，简单验证不存在     复杂可添加对应的后端校验token正确和是否过期请求
		next({name: '登录'}); // 此处可跳无权限页面，没要求直接跳登录省事
		return
	}
	
	// 权限判断，级别页面禁止跳转
	let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
	
	let wen = Array.isArray(to.matched[0].meta.level);
	var result;
	if(wen){
		result = to.matched[0].meta.level;
	}else{
		result = [to.matched[0].meta.level];
	}
	let index = result.indexOf(userInfo.role);
	if(index === -1){
		next({name: '登录'}); // 此处可跳无权限页面，没要求直接跳登录省事
		return
	}
	
	next();
	
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})