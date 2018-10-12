<template>
	<div class="publics">
		<div class="aside">
			<div class="aside_cap">
				<div class="aside_cap_title">贵州省</div>
			</div>
			<div class="aside_nav">
				<div class="aside_nav_item" @click="go_nav(item)" :class="item.isSelect ? 'activeNav' : ''" v-for="item in nav_array" :key="item.title">
					<img :src="item.icon"/>
					<div class="nav_li">{{item.title}}</div>
					
				</div>
			</div>
		</div>
		<div class="main">
			<div class="header">
				<div class="header_log"></div>
				<div class="header_opear">
					<div class="opear_item" @click="goPwd">
						<div class="changePwd_icon"></div>
						<div class="changePwd">修改密码</div>
					</div>
					<div class="opear_item" @click="logout">
						<div class="logout_icon"></div>
						<div class="logout">退出</div>
					</div>
				</div>
			</div>
			<div class="content">
				<router-view/>
			</div>
		</div>
		
		<el-dialog title="修改密码" :visible.sync="pwdDialogVisible" center custom-class="pwdDialog">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="dialogForm">
				<el-form-item label="原密码" prop="oldpwd">
					<el-input type="password" v-model="ruleForm.oldpwd"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="newpwd">
					<el-input type="password" v-model="ruleForm.newpwd"></el-input>
				</el-form-item>
				<el-form-item label="重复新密码" prop="checkpwd">
					<el-input type="password" v-model="ruleForm.checkpwd"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
		    	<div class="btn btn4" @click="updatePwd">完成修改</div>
		  </span>
		</el-dialog>
	</div>
</template>

<script>

export default{
	
	data(){
		var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.newpwd) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	    };
		return{
			pwdDialogVisible: false,
			ruleForm: {
				oldpwd: '',
				newpwd: '',
				checkpwd: '',
			},
			 rules: {
	            oldpwd: [
		            { required: true, message: '请输入原始密码', trigger: 'blur' },
	            ],
	            newpwd: [
		            { required: true, message: '请输入新密码', trigger: 'blur' },
	            ],
	            checkpwd: [
		            { required: true, message: '请再次输入新密码', trigger: 'blur' },
		            { validator: validatePass2, trigger: 'blur' }
	            ],
	       },
			nav_array: [
				{
					path: '/city',
					title: '首页',
					icon: "../../../static/img/provincial/home_icon.png",
					isSelect: true,
				},
				{
					path: '/city/message',
					title: '通知公告',
					icon: '../../../static/img/provincial/Notice_icon.png',
					isSelect: false,
				},
				{
					path: '/city/fupin',
					title: '扶贫信息',
					icon: '../../../static/img/provincial/train_icon.png',
					isSelect: false,
				},
				{
					path: '/city/peixun',
					title: '培训管理',
					icon: '../../../static/img/provincial/Training_icon.png',
					isSelect: false,
				},
				{
					path: '/city/area',
					title: '区划管理',
					icon: '../../../static/img/provincial/quhuaguanli.png',
					isSelect: false,
				},
				{
					path: '/city/zhanghao',
					title: '账号管理',
					icon: '../../../static/img/provincial/account_icon.png',
					isSelect: false,
				},
				{
					path: '/city/cun',
					title: '村信息',
					icon: '../../../static/img/provincial/village_icon.png',
					isSelect: false,
				},
				{
					path: '/city/jingqu',
					title: '景区信息',
					icon: '../../../static/img/provincial/view_icon.png',
					isSelect: false,
				},
			],
		}
	},
	created(){
		// 获取本地nav
		if(sessionStorage.getItem('activeNav') != undefined){
			this.nav_array.forEach(a => {
				a.isSelect = false;
				if(a.path == sessionStorage.getItem('activeNav')){
					a.isSelect = true;
				}
			})
		}
	},
	methods: {
		go_nav(item){
			this.nav_array.forEach(a => {
				a.isSelect = false;
			})
			item.isSelect = true;
			
			sessionStorage.setItem('activeNav', item.path);
			
			this.$router.push({path: item.path})
		},
		goPwd(){
			this.pwdDialogVisible = true;
			// 重置
			this.$refs['ruleForm'].resetFields()
		},
		updatePwd(){
			this.$refs['ruleForm'].validate((b) => {
				if(b){
					console.log('修改操作')
				}else{
					
				}
			})
		},
		logout(){
			this.$confirm('此操作将返回登录页面, 是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
	        }).then(() => {
	          	this.$router.replace({name: '登录'})
	        }).catch(() => {
	                 
	        });
			
			
		},
	},

	
}
	
</script>

<style scoped>
.publics{
	height: 100%;
}
.aside{
	width: 260px;
	min-width: 260px;
	height: 100%;
	display: flex;
	flex-direction: column;
    background:linear-gradient(0deg,rgba(26,73,125,1),rgba(70,103,157,1));
    float: left;
}
.aside_cap{
	height: 98px;
	
}
.aside_nav{
	flex: 1;
	overflow: auto;
}
.aside_cap_title{
	font-size: 24px;
	color:rgba(255,255,255,1);
	display: flex;
	align-items: center;
	height: 98px;
	font-weight: 400;
}
.aside_cap_title:before{
	content: url(../../../static/img/provincial/location.png);
	display: block;
	margin-right: 10px;
	width: 64px;
	height: 64px;
	margin-left: 43px;
}
.aside_nav_item{
	height: 80px;
	color:rgba(255,255,255,1);
	font-size: 18px;
	font-weight: 400;
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
}
.aside_nav_item > img{
	margin-left: 37px;
	margin-right: 8px;
}
.activeNav{
	background: #496e98;
	transition: all .4s;
}
.activeNav:before{
	content: '';
	width:8px;
	height:80px;
	background:rgba(255,255,255,1);
	position: absolute;
}

.main{
	height: 100%;
	overflow: hidden;
}
.header{
	height: 100px;
	position: relative;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 35px rgba(227,227,227,0.26);
	overflow: hidden;
}
.header_log{
	width: 363px;
	height: 48px;
	margin: 0 auto;
	background: url(../../../static/img/provincial/logo-.png) no-repeat center center;
	background-size: cover;
	margin-top: 26px;
}

.header_opear{
	width: 426px;
	height: 60px;
	position: absolute;
	right: 0;
	top: 26px;
	display: flex;
}
.opear_item{
	width:142px;
	height:48px;
	background:rgba(255,255,255,1);
	border-radius:30px;
	box-shadow:0px 0px 8px rgba(166,166,166,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.header_opear .opear_item:nth-child(1){
	margin-right: 34px;
}
.changePwd{
	font-size:16px;
	font-weight:400;
	color:rgba(26,73,125,1);
	position: relative;
}
.changePwd_icon{
	width: 16px;
	height: 20px;
	background: url(../../../static/img/provincial/password_icon.png) no-repeat center center;
	background-size: cover;
	margin-right: 10px;
}
.logout{
	font-size:16px;
	font-weight:400;
	color:rgba(255,75,27,1);
}
.logout_icon{
	width: 17px;
	height: 17px;
	background: url(../../../static/img/provincial/Edit_icon.png) no-repeat center center;
	background-size: cover;
	margin-right: 10px;
}

.content{
	position: absolute;
	top: 100px;
	bottom: 0;
	left: 260px;
	right: 0;
}

</style>