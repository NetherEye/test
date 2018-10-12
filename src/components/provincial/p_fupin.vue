<template>
	<div class="public">
		<div class="main">
			<div class="main_content">
				<div class="filter">
					<div class="isFilter" @click="handleFilter"><img :class="isFilter ? 'rotate' : ''" src="../../../static/img/provincial/select_icon.png" /><span>{{isFilter ? '收起筛选' : '展开筛选'}}</span></div>
					<el-collapse-transition>
						<div class="filterBox" v-show="isFilter" style="padding: 36px 50px 46px 50px;">
							<el-form :inline="true" :model="filter" class="demo-form-inline">
								<el-form-item label="身份证号"  >
									<el-input class="mar" style="width: 235px;" v-model="filter.user" width="80px" placeholder="身份证号"></el-input>
								</el-form-item>
								<el-form-item label="户籍市州" >
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value"   :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="户籍区县">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="户籍乡镇">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="户籍村" label-width="86px">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="项目地址">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 235px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 255px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="景区名称">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 127px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 126px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="景区类别">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="是否需要培训">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 458px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="脱贫状态">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="九大工程">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 125px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="带动类型">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="带动贫困人口增收方式">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 388px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="信息状态">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>

								<el-form-item label="人员状态">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 125px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="填报员" label-width="82px">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-form>
							<div class="filter_btn">
								<div class="btn btn1">查询</div>
								<div class="btn btn2" @click="goMessage">发送短信</div>
								<div class="btn btn3">批量导出</div>
							</div>
						</div>
					</el-collapse-transition>
				</div>
				<div class="table">
					<el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 99%;" width="140px" height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="80px" align="center" show-overflow-tooltip>
						</el-table-column>
						<el-table-column type="index" label="序号" align="center" width="80px">
						</el-table-column>
						<el-table-column prop="villagers" label="姓名" width="150px" align="center" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="city" align="center" label="身份证号码" width="180px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="county" align="center" label="手机号码" width="160px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="town" align="center" label="户籍市州" width="160px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍区县" width="160px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍乡镇" width="160px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍村" width="150px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column align="center" label="操作" show-overflow-tooltip>
							<template slot-scope="scope">
								<div class="btns">
									<div class="textBtnLook" @click="goFupin">查看详情</div>
								</div>
							</template>
						</el-table-column>
					</el-table>

				</div>
				<div class="fenye">
					<div class="fenye_title">共 {{total}} 条数据 每页 {{pageSize}} 条数据 共 {{Math.floor(total/pageSize) + (total%pageSize != 0 ? 1 : 0)}} 页</div>
					<el-pagination :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
					</el-pagination>
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
			isFilter: false, // 是否展开筛选
			filter: {

			},
			pageSize: 10,
			total: 21,
			currentPage: 1,

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
		goFupin(){
			const { href } = this.$router.resolve({
				name: '扶贫人口',
				query: {
					type: '查看',
					provincial:'c'
				}
			})
			window.open(href, '_blank', "height=800,width=600");
		},
		goMessage(){
			const { href } = this.$router.resolve({
				name: '短信调查问卷',
				query: {
					type: '查看',
				}
			})
			window.open(href, '_blank', "height=800,width=600");
		},
	}
}

</script>

<style scoped>
	.public{
		height: 100%;
		position: relative;
	}
	.footer{
		height: 60px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.main{
		position: absolute;
		top: 0;
		bottom: 60px;
		left: 0;
		right: 0;
		background: #eff2f7;
		padding: 20px 40px 0px 20px;
	}
	.main_content{
		height: 100%;
		background:rgba(255,255,255,1);
		display: flex;
		flex-direction: column;
		border-radius:3px;
		box-shadow:0px 0px 120px 0px rgba(31,32,41,0.05);
		overflow: auto;

	}
	.filter{
		height: 74px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.isFilter{
		width:190px;
		height:50px;
		background:rgba(244,244,244,1);
		border-radius:10px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size:18px;
		font-weight:400;
		color:rgba(61,97,150,1);
	}
	.rotate{
		transform: rotate(180deg);
	}
	.isFilter>img{
		margin-right: 10px;
		transition: all .3s;
	}
	.filterBox{
		position: absolute;
		border-top: 1px solid rgba(238,238,238,1);
		padding: 36px 50px 46px 50px;
		height: auto;
		z-index: 999;
		background-color: #fff;
		top: 74px;
		left: 0;
		right: 0;
		opacity:0.99;
		box-shadow:0px 10px 40px rgba(0,0,0,0.14);

	}
	.filter_btn{
		display: flex;
		justify-content: flex-end;
		padding-left: 52px;
		margin-top: 13px;
	}
	.filter_btn>div{
		margin-left: 30px;
	}
	.table{
		flex: 1;
	}
</style>
