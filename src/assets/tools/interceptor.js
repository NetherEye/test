/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import { Message } from 'element-ui'
import Vue from 'vue';
// 超时时间
axios.defaults.timeout = 10000
// http请求拦截器
var loadinginstace,
	needLoadingRequestCount = 0; // 合并请求loading
;

/* 当config.options 不为null时显示loading */
/* needLoadingRequestCount 为请求一次自增，只为0时显示loading，且请求结束后为0时关闭loading */

axios.interceptors.request.use(config => {
	if(config.options != null && needLoadingRequestCount == 0){ // 此处显示loading
		config.options.loadingText = config.options.loadingText || '拼命加载中...';
		loadinginstace = Vue.prototype.$loading({
			fullscreen: true,
			text: config.options.loadingText,
			background: "rgba(0, 0, 0, 0.8)",
		})
		needLoadingRequestCount++;
	}
	return config
}, error => {
	endLoading()
	Message.error({
		message: '请求超时'
	})
	
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
	setTimeout( () => {
		endLoading()
	}, 1000)
	return data
}, error => {
	endLoading()
	Message.error({
		message: '请求失败'
	})
	return Promise.reject(error)
})

function endLoading() {
	if(needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if(needLoadingRequestCount === 0) {
		loadinginstace.close()
	}
};

export default axios