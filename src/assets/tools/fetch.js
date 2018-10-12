import axios from '@/assets/tools/interceptor'
import qs from 'qs'
import Vue from 'vue'
import router from '../../router/index'

axios.defaults.withCredentials = true

import { Loading, Message } from 'element-ui'

class Fetch {
	//表单序列化
	packageParamBase(param) {
		let _param = param || {}
		let _requestParam = param
		return qs.stringify(_requestParam)
	}
	
	//获取token值
	getToken() {
		let token = localStorage.getItem('token')
		if(token) {
			token = token
		} else {
			token = ""
		}
		return token
	}
	// post
	post(url, data, callback, options) {
		let _requestParam = this.packageParamBase(data);
		
		options = options || null;
		if(options != null && options.noToken){
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			}
		}else{
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'token': this.getToken()
			}
		}
		axios({
				method: 'post',
				url: url,
				data: _requestParam,
				headers: _headers,
				options: options,
			})
			.then(function(response) {
				checkStatusAndCode(response, callback);
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// get
	get(url, data, callback, options) {
		let _requestParam = this.packageParamBase(data);
		
		options = options || null;
		if(options != null && options.noToken){
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			}
		}else{
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'token': this.getToken()
			}
		}
		axios({
				method: 'get',
				url: url,
				params: data,
				headers: _headers,
				options: options,
			})
			.then(function(response) {
				checkStatusAndCode(response, callback);
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// file
	file(url, data, callback, options) {
		var formData = new FormData();
		formData.append('file', data);
		
		options = options || null;
		if(options != null && options.noToken){
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			}
		}else{
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'token': this.getToken()
			}
		}
		axios({
				method: 'get',
				url: url,
				data: formData,
				headers: _headers,
				options: options,
			})
			.then(function(response) {
				checkStatusAndCode(response, callback);
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
	
	// file
	delete(url, data, callback, options) {
		options = options || null;
		if(options != null && options.noToken){
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			}
		}else{
			var _headers = {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'token': this.getToken()
			}
		}
		axios({
				method: 'get',
				url: url,
				params: data,
				headers: _headers,
				options: options,
			})
			.then(function(response) {
				checkStatusAndCode(response, callback);
			})
			.catch(function(error) {
				if(error && error.response) {
					callback(error.response)
				}
			})
	}
}


function checkStatusAndCode(response, callback){
	if(response && ((response.status === 200 || response.status === 304 || response.status === 400))) {
		
		if(response.data.code != 200) { // 后台自定义状态码非200时将message提醒给用户
			Message({
				type: 'warning',
				message: response.data.message
			})
		}
		if(response.data.code == 601){
			localStorage.clear();
			router.replace({name: '登录'})
		}
	
		return callback(response.data)
	}
	return callback({ // 自定义网络异常对象
		code: '404',
		message: '网络异常'
	})
}

export default new Fetch()