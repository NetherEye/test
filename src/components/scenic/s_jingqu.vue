<template>
	<div class="public jingqu ">
		<div class="main">
			<div class="main_content">
				<div class="box">
					<div class="content" style="margin-left:51px;">
						<div class="item">
							<el-form ref="form" label-position="left" :model="form" label-width="100px" style="width:80%">
								<div class="">
									<el-col :span="5">
										<el-form-item label="景区名称">
											<el-input v-model="formInline.user" placeholder="姓名"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="6">
										<el-form-item label="景区类别">
											<el-input v-model="formInline.user" placeholder="身份证号"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="5">
										<el-form-item label="景区融合类型">
											<el-input v-model="formInline.user" placeholder="性别"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="4">
										<el-form-item label="经度" label-width="60px">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="4">
										<el-form-item label="经度" label-width="60px">
											<el-input v-model="form.name"></el-input>
										</el-form-item>
									</el-col>
								</div>
								<el-form-item label="地址" >
									<el-input v-model="form.name"></el-input>
								</el-form-item>
								<div>
									<el-form-item label="景区介绍">
										<el-input type="textarea" :rows="7" resize='none' :autosize="{minRows:7,maxRows:7}" v-model="form.desc"></el-input>
									</el-form-item>
								</div>
								<div>
									<el-form-item label="景区宣传语">
										<el-input v-model="input10" style="width:100%;">
										</el-input>
									</el-form-item>
								</div>
								<div>
									<el-col :span="12">
										<el-form-item label="主要负责人">
											<el-input v-model="input10">
											</el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="主要负责人电话" label-width="120px">
											<el-input v-model="input10">
											</el-input>
										</el-form-item>
									</el-col>
								</div>
								<div>
									<el-col :span="8">
										<el-form-item label="主体企业名称" label-width="100px">
											<el-input v-model="input10" >
											</el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="主体企业负责人" label-width="120px">
											<el-input v-model="input10" >
											</el-input>
										</el-form-item>
									</el-col>
									<el-col :span="8">
										<el-form-item label="主体企业负责人电话" label-width="140px">
											<el-input v-model="input10">
											</el-input>
										</el-form-item>
									</el-col>
								</div>
							</el-form>
						</div>
						<div class="item1">
							<p class="color ft18 mar">上传规划</p>
							<div class="fuj">
								<div class="img">
									<img src="../../../static/img/provincial/bj.png" />
									<div class="img_tilte ft12">照片描述</div>
								</div>
								<div class="files" v-if="type != '旅游景区详情'">
									<div class="upload">
										<input type="file" name="" id="" value="" />
									</div>
								</div>
							</div>
						</div>
						<div class="mi">
							<p class="dibu" @click="goSubmit">提交</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
import footer from '@/components/com/footer'
export default {
	data() {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formInline: {
				user: '',
				region: ''
			},

			isFilter: false, // 是否展开筛选
			filter: {

			},
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			textarea: '',
			input10: '',
			pageSize: 10,
			total: 21,
			currentPage: 1,
			type: '',
			tableData: [
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄按时打算大叔大叔大叔大叔大叔大叔大叔打时代发生的发生地方时代发生的发生的发的'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
			],
			multipleSelection: [],
		}
	},
	components: { 'my-footer': footer },
	methods: {
		handleFilter() {
			this.isFilter = !this.isFilter;
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		goScenic() {
			const { href } = this.$router.resolve({
				name: '扶贫人口',
				query: {
					a: 1,
					b: 2
				}
			})
			window.open(href, '_blank', "height=800,width=600");
		},
		//提交
		goSubmit() {
			console.log('asdf')
		}
	}
}

</script>

<style scoped>
.public {
  height: 100%;
  position: relative;
}
.footer {
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.main {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  background: #eff2f7;
  padding: 20px 40px 0px 20px;
}
.main_content {
  height: 100%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
  overflow: auto;
}
.filter {
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.isFilter {
  width: 190px;
  height: 50px;
  background: rgba(244, 244, 244, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: rgba(61, 97, 150, 1);
}
.rotate {
  transform: rotate(180deg);
}
.isFilter > img {
  margin-right: 10px;
  transition: all 0.3s;
}
.filterBox {
  position: absolute;
  border-top: 1px solid rgba(238, 238, 238, 1);
  padding: 36px 50px 46px 50px;
  height: auto;
  z-index: 999;
  background-color: #fff;
  top: 74px;
  left: 0;
  right: 0;
  opacity: 0.99;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.14);
}
.mi {
  margin-top: 34px;
  display: flex;
  justify-content: space-around;
}
.dibu {
  width: 130px;
  height: 40px;
  background-color: #45c3ad;
  border-radius: 4px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #f8f8f8;
  cursor: pointer;
}
.yey {
  width: 130px;
  height: 40px;
  background-color: #a4a8b3;
  border-radius: 4px;
}
.filter_btn {
  display: flex;
  justify-content: flex-end;
  padding-left: 52px;
  margin-top: 13px;
}
.filter_btn > div {
  margin-left: 30px;
}
.table {
  flex: 1;
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
.color {
  color: rgba(10, 31, 51, 1);
}
.ft12 {
  font-size: 12px;
}
.ft18 {
  font-size: 18px;
}
.ft20 {
  font-size: 20px;
}
.mar {
  margin-top: 13px;
  margin-bottom: 10px;
}
.item {
  display: flex;
}
.item_item {
  width: 400px;
  margin-right: 66px;
}
.item_item:last-child {
  margin-right: 0;
}

.upload {
  display: inline-block;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px rgba(31, 32, 41, 0.18);
  margin-right: 50px;
  background: url(../../../static/img/provincial/zz.png) no-repeat center center;
  cursor: pointer;
}
.upload > input {
  display: inline-block;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
.files {
  display: flex;
  display: inline-block;
  position: relative;
}
.files:after {
  content: "可添加图片/视频/文档";
  position: absolute;
  bottom: -22px;
  left: 6px;
  right: 0;
  font-size: 14px;
  color: rgba(164, 168, 179, 1);
}
.img {
  display: inline-block;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px rgba(31, 32, 41, 0.18);
  margin-right: 50px;
}
.img .img_tilte {
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: rgba(70, 103, 157, 1);
}
.img > img {
  display: block;
  height: 120px;
  width: 100%;
  border-radius: 4px;
}
.fuj {
  display: flex;
}
</style>