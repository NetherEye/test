<template>
	<div class="public">
		<div class="box">
			<div class="title">{{type == '查看' ? '关于' + lookTitle + '公告' : '发布通知公告'}}</div>
			<div class="content">
				<p class="color ft20">{{type == '查看' ? '通知公告-查看我发布的' : '发布通知公告'}}</p>
				<div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
				<div class="item" style="margin-bottom: 34px;">
					<div class="item_item" v-if="type != '查看'">
						<p class="color ft18 mar">通知标题</p>
						<p>
							<el-input v-model="input10" clearable disabled="type == '查看'">
							</el-input>
						</p>
					</div>
					<div class="item_item">
						<p class="color ft18 mar">文件号</p>
						<p>
							<el-input v-model="input10" clearable disabled="type == '查看'">
							</el-input>
						</p>
					</div>
					<div class="item_item">
						<p class="color ft18 mar">类别</p>
						<p>
							<el-select v-model="leibie" clearable style="width: 400px;" disabled="type == '查看'">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</p>
					</div>
				</div>
				<div class="item1">
					<p class="color ft18 mar">通知内容</p>
					<el-input type="textarea" :rows="7" resize='none' :autosize="{minRows:7,maxRows:7}"   v-model="textarea" disabled="type == '查看'">
					</el-input>
				</div>
				<div class="item2">
					<div class="item2_item1">发送组别</div>
					<div class="item2_item2">
						<el-radio-group v-model="zubie">
							<el-radio :label="3">备选项</el-radio>
							<el-radio :label="6">备选项</el-radio>
							<el-radio :label="9">备选项</el-radio>
						</el-radio-group>
					</div>
				</div>
				<div class="item2">
					<div class="item2_item1">选择发送对象</div>
					<div class="item2_item2">
						<el-radio-group v-model="duixiang">
							<el-radio :label="3">备选项</el-radio>
							<el-radio :label="6">备选项</el-radio>
							<el-radio :label="9">备选项</el-radio>
						</el-radio-group>
					</div>
				</div>
				<div class="item1">
					<p class="color ft18 mar">上传附件</p>
					<div class="fuj">
						<div class="img">
							<img src="../../../static/img/provincial/bj.png" />
							<div class="img_tilte ft12">照片描述</div>
						</div>
						<div class="files" v-if="type != '查看'">
							<div class="upload">
								<input type="file" name="" id="" value="" />
							</div>
						</div>
					</div>
				</div>
				<div class="btns" style="margin-top: 40px;" v-if="type == '发布'">
					<div class="btn btn2">发布</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			type: '发布',
			lookTitle: "培训",
			leibie: '全部',
			textarea: '',
			duixiang: '',
			zubie: '',
			options: [
				{value: '全部', label: '全部'},
				{value: '单个', label: '单个'}
			],
		}
	},
	created(){
		// 获取页面类型 发布 查看
		if(this.$route.query.type != undefined){
			this.type = this.$route.query.type;
		}else{
			// gg
		}
	},
}
</script>

<style scoped>
	.public {
	  height: auto;
	  padding: 40px;
	}
	.box {
	  height: auto;
	  background: rgba(255, 255, 255, 1);
	  border-radius: 10px;
	  box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
	  position: relative;
	}
	.title {
	  height: 65px;
	  text-align: center;
	  line-height: 65px;
	  font-size: 22px;
	  color: rgba(255, 255, 255, 1);
	  background: rgba(70, 103, 157, 1);
	  border-radius: 10px 10px 0px 0px;
	  box-shadow: 0px 0px 100px 0px rgba(11, 30, 51, 0.05);
	}
	.content {
	  height: auto;
	  padding: 21px;
	  padding-bottom: 40px;
	}
	.color{
		color:rgba(10,31,51,1);
	}
	.ft12{
		font-size: 12px;
	}
	.ft18{
		font-size: 18px;
	}
	.ft20{
		font-size: 20px;
	}
	.mar{
		margin-top: 13px;
		margin-bottom: 10px;
	}
	.item{
		display: flex;
	}
	.item_item{
		width: 400px;
		margin-right: 66px;
	}
	.item_item:last-child{
		margin-right: 0;
	}
	.item2{
		display: flex;
		margin: 29px 0;
		
	}
	.item2_item1{
		width: 112px;
		margin-right: 12px;
	}
	.item2_item2{
		flex: 1;
	}
	.upload{
		display: inline-block;
		width:150px;
		height:150px;
		background:rgba(255,255,255,1);
		border-radius:4px;
		box-shadow:0px 0px 8px 0px rgba(31,32,41,0.18);
		margin-right: 50px;
		background: url(../../../static/img/provincial/zz.png) no-repeat center center;
		cursor: pointer;
	}
	.upload>input{
		display: inline-block;
		border: none;
		width: 100%;
		height: 100%;
		outline: none;
		opacity: 0;
		cursor: pointer;
	}
	.files{
		display: flex;
		display: inline-block;
		position: relative;
	}
	.files:after{
		content: '可添加图片/视频/文档';
		position: absolute;
		bottom: -22px;
		left: 6px;
		right: 0;
		font-size:14px;
		color:rgba(164,168,179,1);
	}
	.img{
		display: inline-block;
		width:150px;
		height:150px;
		background:rgba(255,255,255,1);
		border-radius:4px;
		box-shadow:0px 0px 8px 0px rgba(31,32,41,0.18);
		margin-right: 50px;
	}
	.img .img_tilte{
		height: 30px;
		text-align: center;
		line-height: 30px;
		color:rgba(70,103,157,1);
	}
	.img>img{
		display: block;
		height: 120px;
		width: 100%;
		border-radius:4px;
	}
	.fuj{
		display: flex;
	}
</style>